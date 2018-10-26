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

getEmpleado(12).then(empleado => {
    console.log('Empleado de BD', empleado);
})