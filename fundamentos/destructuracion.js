//Destructuracion

let deadpool = {
    nombre: "Wade",
    apellido: "Wilson",
    poder: "regeneracion",
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

let { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);

//console.log(deadpool.getNombre());