const { normalize , schema } = require('normalizr');
const fs = require('fs');

const empresa = JSON.parse(fs.readFileSync('./db/empresa.json'));

//Definimos el esquema de empleado
const empleado = new schema.Entity('empleado');


//Definimos el esquema de organigrama

const organigrama = new schema.Entity('organigrama', {
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
});

const util = require('util');

function print(objeto) {
    console.log(util.inspect(objeto, false, 12 ,true));
}

console.log('------------- OBJETO NORMALIZADO -------------');

const normalizedEmpresa = normalize(empresa, organigrama);
print(normalizedEmpresa);

console.log('Longitud objeto original: ', JSON.stringify(empresa).length);
console.log('Longitud objeto normalizado: ', JSON.stringify(normalizedEmpresa).length);
