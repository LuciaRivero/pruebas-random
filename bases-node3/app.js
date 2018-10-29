const { crearArchivo } = require('./multiplicar/multiplicar');


//console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]
    //split convetir de un string a un arreglo
    //console.log(base);
    /*
    [ 'C:\\Program Files\\nodejs\\node.exe',
      'C:\\Users\\lucia.rivero\\Desktop\\cursoUdemy\\Node-Fer-Herrera\\bases-node3\\app.js' ]
    */


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));