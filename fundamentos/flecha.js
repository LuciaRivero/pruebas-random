/*function sumar (a,b){
    return a+ b;

}

console.log(sumar(10, 20));
*/


/* let sumar = (a,b) => {
    return a + b;
}

console.log(sumar(10, 20)); */


/*let sumar = (a, b) => a + b; //  si el retorno es de una sola linea podemos ahcerlo de esta manera

console.log(sumar(10, 20));

let saludar = () => "hola";

console.log(saludar());*/

let deadpool = {
    nombre: "Wade",
    apellido: "Wilson",
    poder: "regeneracion",
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};
console.log(deadpool.getNombre());