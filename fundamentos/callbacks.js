/*let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'fer',
        id
    }
    callback(usuario);
}

getUsuarioById("hola", (usuario) => {
    console.log('usuario conectado',
        usuario);
});*/

/*
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'fer',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`);
    } else {
        callback(usuario);
    }
}

getUsuarioById(20, (usuario) => {
    console.log('usuario conectado',
        usuario);
});
*/
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'fer',
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('usuario de base de dato',
        usuario);
});