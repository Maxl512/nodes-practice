const os = require('os');
// el modulo os accede a el sistema operativo
// Importamos el modulo os, preinstalado con node.js
console.log(os.freemem() / 1000000000);
// nos muestra la memoria lbire que tiene el sitema operativo
console.log(os.homedir());
// nos muestra en que directorio me encuentro
console.log(os.hostname());
// nos muestra el hostname del sistema operativo
console.log(os.platform());
// nos permite saber en que plataforma nos ejecutamos
console.log(os.release());
// nos muestra la version del sistema operativo
console.log(os.totalmem() / 1000000000);
// nos muestra la memoria total del sistema operativo
