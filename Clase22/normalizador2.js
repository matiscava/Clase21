const { normalize , denormalize , schema } = require('normalizr');
const fs = require('fs');

const holding = JSON.parse(fs.readFileSync('./db/holding.json'));

//Definimos el esquema de empleado
const empleado = new schema.Entity('empleado');


//Definimos el esquema de organigrama

const organigrama = new schema.Entity('organigrama', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
});

const empresas = new schema.Entity('empresas',{
    empresas: [organigrama]
})

const util = require('util');

function print(objeto) {
    console.log(util.inspect(objeto, false, 12 ,true));
}

console.log('------------- OBJETO NORMALIZADO -------------');

const normalizedHolding = normalize(holding, empresas);
print(normalizedHolding);

console.log('Longitud objeto original: ', JSON.stringify(holding).length);
console.log('Longitud objeto normalizado: ', JSON.stringify(normalizedHolding).length);


console.log('------------- OBJETO FESNORMALIZADO -------------');

const denormalizedHolding = denormalize(normalizedHolding.result, empresas ,normalizedHolding.entities);
print(denormalizedHolding);

console.log('Longitud objeto original: ', JSON.stringify(holding).length);
console.log('Longitud objeto normalizado: ', JSON.stringify(normalizedHolding).length);
console.log('Longitud objeto desnormalizado: ', JSON.stringify(denormalizedHolding).length);
const total = JSON.stringify(holding).length;
const compresion =  total - JSON.stringify(normalizedHolding).length;
const porcentaje = parseFloat((compresion*100)/total).toFixed(2);
console.log('Porcentaje de compresion: ', porcentaje, '%');
