// Node.js
// Nos permite ejecutar codigo fuera del navegador, es decir en el sistema 
// operativo, esto se ejecuta en la consola de comandos de windows
// a la cual accedemos windows+R y escrimos cmd le damos abrir y se abrira
// la consola de comandos
// Para saber la version de node.js, usamos el comando node --version

// Para acceder a nuestro codigo debemos ubicarnos en 
// dicha carpeta con el comand "cd" + nombre de la carpeta
// Luego de estar en la carpeta podemos ejecutar nuestro codigo
// con el comando node + nombredelscript.js 

// console.log("hola mundo");

// Si queremos tener una aplicacion grande debemos dividirla en partes
// cada parte se llama modulos, en node se utilizan muchos modulos

// En este caso tenemos el modulo math.js, para acceder a el y llamarlo 
// hacemos lo que en node.js se llama importacion de archivos
// para esto utiliozamos la palabra 
// clave en node.js "require('direccionDelarchivo')"
// si queremos decirle q el archivo esta dentro de la misma carpeta
// usamos "./" == "require('./nombredelarchivo')"
const mathFunctions  = require('./math.js');
console.log(mathFunctions);
// Nos muestra un obheto con multiple propiedades,
// cada una de ellas es una funcion


// Para utilizar lo importado lo debemos almacenar en una constante
// y luego utilizarlo de esta forma "constName.action()";

console.log(mathFunctions.add(5, 5));
console.log(mathFunctions.substract(5, 5));
console.log(mathFunctions.multiply(5, 5));
console.log(mathFunctions.divide(5, 0));
console.log(mathFunctions.sayHello("Juan"));

// Ahora para que el archivo importado nos permite usar sus datos
// debemos decirle q lo haga utilizando un objeto
// ver el archivo math.js 
// exports.name = name;
// exports.name; name == name of action from constName
//ejemplo :
// const.sumar();
// exports.sumar = nameOfDate;
// Cuando hacemos exports.name
// name se convierte en una propiedades que le agregamos al
// objeto donde esta almacenada la importacion

// El modulo exporta el objeto sumar el cual sera igual al 
// objeto que le asignemos
// Para importar ese objeto debemos hacerlo
// utilizando la constante en la que almacenamos la importacion
// y llamarlo por el nombre que le dimos a la exportacion en el modulo

// Entonces los modulos son archivos que nos permiten dividir nuestra 
// aplicacion en partes para no tener grandes y extensos archivos

// Hasta ahora solo hemos exportado propiedades
// si queremos exportar objetos, funciones o variables utilizamos la 
// palabra clave
// module.exports = objectName; exportamos cualqueir datatype de js

let index = 0;

console.group("Personal Info");
for (info in mathFunctions.son){
    if(index <= 2){
        console.log(info + ":" + mathFunctions.son[info]);
    };
    if(index == 3){
        console.group("Education:")
        for (date in mathFunctions.son.education) {
            console.log(date + ":" + mathFunctions.son.education[date]);
        };
        console.groupEnd();
    };
    if(index == 4){
        console.group("Skills:");
        console.log(mathFunctions.son.skills());
        console.groupEnd();
    };
    index++;
};

console.groupEnd();

// Node.js tiene modulos que se intalan al instalarlo
// esto se puede ver en la pagina oficial en la documentacion de la version
// del node,js que descargamos
// ver os.js //aqui trabajamos con informacion sobre el sistema operativo
// ver fs.js // aqui trabajamos con los archivos del sistema operativo
// ver http.js // aqui trabajamos con el protocolo del sistema operativo
// el protocolo nos permite conectar a internet que nos conecta al
// servidor.
// http consiste en recibir peticiones de los clientes y dar respuestas
// desde el servidor

// en node.js se tarta de algo asincrono que ejecuta
// varias cosas a la vez, mientras hace algo puede hacer
// otra cosa

// NPM, NODE PACKAGES MANAGER
// nos permtie modificar node, con frameworks
// npm install nameofModule
// luego de instalarlo se puiede utilizar al importarlo

const colors = require('colors');
console.log("Hola".yellow);

// Cuando queremos ejecutar una aplicacion desde otro computador
// este necesitara instalar todos los modulos que hemos nosotros instalados
// esto se hace con un comando de npm llamado init
// este comando nos pide mas informacion de nuestro proyecto
// para luego crear un archivo dando referencia de nuestro proyecto
// describiendo su creador y otras informaciones