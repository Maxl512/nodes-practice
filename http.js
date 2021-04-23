const http = require('http');

const handleServer = function(req, res) {
    res.writeHead(200, {'Content-type':'text/plain'});
    // nos permite escribri una cabecera osea mas informacin para el
    // navegador
    /*
    como primer parametro colocamos los codigos de respuesta
    200: respuesta correcta
    404: not found
    como segundo parametro el tipo de archivo
    */
    res.write("Bienvenido Usuario!!");
    // el metodo write, nos permite escrbir o crear algo
    // en el servidor
    res.end();
    // nos permite terminar la respuesta
};
const server = http.createServer(handleServer);
// Cuando creamos un servidor debemos recibir peticiones y dar respuestas
// podemos llamar otra funcnion en la q manejaremos este servidor

server.listen(3000, function() {
    console.log("Server on port 3000");
});
// el metodo listen() lo que hace es decirle en 
// que puerto escuchara el servidor
// un puerto es donde se ejecuta algo mientras hacemos otras cosas
// para accerde a el abrimos el navegador
// y entramos a localhost:puerto

// Ahora si queremos modificar algo debemos cancelar el servidor y 
// volverlo a abrir
// Para ello hacemos ctrl+C x2 veces