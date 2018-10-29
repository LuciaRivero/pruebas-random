let getNombre = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Commit que no entiendo');
            }, 3000);

        });
    }
    /*getNombre().then(nombre => {
    console.log(nombre); //asdasdad
     })
    .catch(e => {
      console.log('error de ASYNC', e);
    })*/

let saludo = async() => {
    let nombre = await getNombre();

    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});
//recibo el mensaje que es el producto de la llamada, con await ejecuto la promesa espero el resultado lo almaceno en una variable y utilizo como una funcion de js.

//Los async pueden estar solos pero el await  fuerza debe estar dentro de una funcion que tenga el parametro async antes de la funcion.


/*
let getNombre = async() => {

    //undefined.nombre; dispara el catch
    //throw new Error('No existe un nombre para el usuario');

    return 'asdasdad';
};


getNombre().then(nombre => {
        console.log(nombre); //asdasdad
    })
    .catch(e => {
        console.log('error de ASYNC', e);
    })

    */