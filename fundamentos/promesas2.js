//encadenar promesas

let empleados = [{
    id: 1,
    nombre: 'Fer'
}, {
    id: 2,
    nombre: 'asdasd'
}, {
    id: 3,
    nombre: 'owen'
}];

//DB de salarios.
let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });

}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No existe salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}


getEmpleado(3).then(empleado => {
        return getSalario(empleado);
    }).then(resp => {
        console.log(`El salario de${resp.nombre} es de ${resp.salario}`);
    }) //este then pertenece a la promesa del return
    .catch(err => {
        console.log(err);
    });