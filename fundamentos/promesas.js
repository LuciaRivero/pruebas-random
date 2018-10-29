//DB de empleados
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

/* Promesa es una funcion con dos callbacks (resolve reject) resolve se llama si la promesa es exitosa, y el reject si no es exitosa (en este caso no existe empleado en la db). En el resolve no podemos mandar dos arguentos o mas solo se puede regresar uno, si necesitamos mandar mas de un dato debemos mandar un objeto*/
let getEmpleado = (id) => { //recibo un unico parametro id
        return new Promise((resolve, reject) => {
            let empleadoDB = empleados.find(empleado => empleado.id === id)
            if (!empleadoDB) {
                reject(`No existe un empleado con el ID ${id}`)
            } else {
                resolve(empleadoDB);
            }
        });

    }
    //si llamamos dos o mas veces el resolve se dispara una sola vez
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
    getSalario(empleado).then(resp => {
        console.log(`el salario de ${resp.nombre} es de ${resp.salario}$ `);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
});