const fs = require('fs');

fs.writeFile('./texto.txt', "Hola soy un texto", function(err) {
    let message;
    if(err){
        message = err;
    }else{
        message = "Su archivo ha sido creado correctamente";
    };
    console.log(message);
});
// writeFile() es un metodo que nos permite crear un archivo dentro 
// como primer parametro le indicamos el archivo con su direccion
// en el segundo indicamos su contenido
// en el tercero un callback que se ejecutara 
// ua vez sea creado el archivo
// writeFile se usa tanto para crear como para modificar archivos

/*
En node.js hacemos callbacks despues de un metodo si queremos hacer algo 
despues de que ello se cumpla
debido a que node.js es asincrono y puede llevar a cabo muchos procesos a la
vez
*/

// readFile(); es un metodo que nos permite leer los archivos
fs.readFile('./texto.txt', function(err, data) {
    let message;
    if(err){
        message = err;
    }else{
        message = "El archivo dice: '" + data.toString() + "'";
    };
    console.log(message);
});
// nos devuelve un buffer que debemos convertir a string para poder
// entenderlo