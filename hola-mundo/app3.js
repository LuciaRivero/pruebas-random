//ciclo de vida con node.

console.log('inicio del programa');

setTimeout(function() {
    console.log('Primer Timeout');
}, 4000);

setTimeout(function() {
    console.log('seg Timeout');
}, 5000);

setTimeout(function() {
    console.log('tercero Timeout');
}, 3000);

console.log('fin del programa');