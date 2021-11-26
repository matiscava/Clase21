class Prueba {
    static selectRandom (array){
        const max = array.length-1;
        const numRan = parseInt(Math.random() * (max - 0) + 0);

        return array[numRan];
        // for ( let i = 0 ; i < array.lenght ; i++){
        //     return array[i]
        // }
    }
    static crearObjeto (nombres,apellidos,colores) {
        const objeto ={
            nombre: this.selectRandom(nombres),
            apellido: this.selectRandom(apellidos),
            color: this.selectRandom(colores)
        };
        return objeto
    }
}

module.exports = Prueba;