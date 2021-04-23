const father = {};
// Creamos un objeto vacio
function add(x1, x2) {
    return x1 + x2;
};
function substract(x1, x2) {
    return x1 - x2;   
};
function multiply(x1, x2) {
    return x1 * x2;
};
function divide(x1, x2) {
    if(x2 == 0){
        return "No se puede dividir por 0";
    } else{
        return x1 / x2;
    };
};
function sayHello(name){
    return `Hola mundoooooo!!! Mi nombre es: ${name}`;
};

const son = {
    name: "Juan",
    lastname: "Rodriguez",
    age: "35",
    education : {
        place: "La cruz",
        grade : "A+"
    },
    skills(){
        const skills = "Yo se bailar, cocinar, soy programador y muy inteligente";
        return skills;
    }
};


father.add = add;
father.substract = substract;
father.multiply = multiply;
father.divide = divide;
father.sayHello = sayHello;
father.son = son;
// Aqui le añadimos propiedades al objeto, con los valroes de funciones y
// otros objetos

module.exports = father;
// Exportamos el objeto