// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {

    nombre : "Omar",
    1:{ 2:2,
        3:3,
        4:4,
    },
    5:5,
    6:6,
    saludo: () => {
        console.log(`Hola ${this.nombre}`);
    }

};

module.exports = objetoAnidado;
