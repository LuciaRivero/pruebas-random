const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let argv2 = process.argv;
console.log('Limite', argv.limite);



//console.log(process.argv);
//console.log(argv.base);
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//split convetir de un string a un arreglo
/*
//console.log(base);
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\lucia.rivero\\Desktop\\cursoUdemy\\Node-Fer-Herrera\\bases-node3\\app.js' ]
*/
/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
*/