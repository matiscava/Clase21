const Prueba = require('./../server');

const main = async () => {
    try{
        const nombres = ['Luis','Lucia','Juan','Augusto','Ana'];
        const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
        const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];
        const array = [];
        // const test = Prueba.crearObjeto(nombres,apellidos,colores);
        for (i=0;i<10;i++){
            array.push(Prueba.crearObjeto(nombres,apellidos,colores))
        } 
        
        console.log(array);
    }catch (error){
        console.error('error in the api', error.message);
    }
}

main();