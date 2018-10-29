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

let getInfo = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de $ ${resp.salario}`;
}

getInfo(3)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));