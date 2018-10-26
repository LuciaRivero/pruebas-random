/* let y el var hacen lo mismo declaran una variable pero la forma en laque vive es diferente */
/*let no se peude volver a inicializar mientras se encuentren en el mismo ambito o scope a diferencia del var*/
/**/
/*
let nombre = 'wolverine';

if (true) {
    let nombre = 'Magneto';
}

console.log(nombre);*/
let i;
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}

console.log(i);