class Cliente {
    
    constructor(nombre, edad, telefono, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.email = email;
    }

    mostrarNombre () {
        console.log("El nombre del cliente es: " + this.nombre);
    }
}

const nombre = prompt("Introduce el nombre:");
const edad = prompt("Introduce la edad:");
const tlf = prompt("Introduce el número de teléfono:");
const email = prompt("Ingrese su email si desea recibir su factura");

const cliente1 = new Cliente(nombre, edad, tlf, email);
console.log(cliente1);
cliente1.mostrarNombre();

const iva = 0.21
const productos = [
{ nombre: "Remera", precio: 3000 },
{ nombre: "Camisa", precio: 5000 },
{ nombre: "Pantalon", precio: 3500 },
{ nombre: "Short", precio: 2500 },
{ nombre: "Gorra", precio: 2000 }
];

let carrito = [] 

let escoger = prompt("Desea comprar un producto? Escriba si para comprar, no para salir");

while (escoger != "si" && escoger != "no"){
alert("Ingrese si o no")
escoger = prompt("Desea comprar un prducto? Escoja si para comprar, no para salir")
}

if (escoger == "si"){
alert("Estos son los productos en stock")
let todosLosProductos = productos.map(
    (productos) => productos.nombre + " " + productos.precio + "$\n"
);
alert(todosLosProductos.join(""))
} else if (escoger == "no"){
alert("gracias por visitar nuestra tienda")
}

while(escoger != "no"){
let producto = prompt("Ingresa los productos a tu carrito \n 1-Remera \n 2-Camisa \n 3-Pantalon \n 4-Short \n 5-Gorra").toLowerCase(

);
let precio = 0; 

if (producto == "remera" || producto == "camisa" || producto == "pantalon" || producto == "short"
|| producto == "gorra") {
    switch (producto) {
        case "remera":
            precio = 3000;
        break;
        case "camisa":
            precio = 5000;
            break;
        case "pantalon":
            precio = 3500;
            break;
        case "short":
            precio = 2500;
            break;
        case "gorra":
            precio = 2000;
            break;
            default:
                break;
    }
    let cantidad = parseInt(prompt("Cuantas unidades desea llevar?"))

    carrito.push({producto, cantidad, precio})
    console.log(carrito);
} else {
    alert("No tenemos ese producto en stock")
}

escoger = prompt ("Desea agregar mas productos?")

while (escoger === "no") {
alert("Gracias por su compra")
carrito.forEach((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto}, cantidad: ${carritoFinal.cantidad}, total a pagar por producto ${carritoFinal.cantidad
    * carritoFinal.precio}`)
})
break; 
}
}

function calcularTotal(){ 
    if (carrito.length > 0) {
    const total = carrito.reduce((acc, elemento) => acc += elemento.precio * elemento.cantidad, 0);
    const totalConIva = total + total * iva;
    alert("El total con IVA es $" + totalConIva);

    const medioDePago = prompt("Ingrese su medio de pago (tarjeta o efectivo)");

    let pagoFinal = 0;
    switch (medioDePago) {
        case "efectivo":
            alert("Tenés 15% de descuento por abonar en efectivo. El precio final es $" + (pagoFinal = totalConIva - (totalConIva * 0.15)));
            break;
        case "tarjeta":
            alert("Tenes 5% de descuento por abonar con tarjeta. El precio final es $" + (pagoFinal = totalConIva - (totalConIva * 0.05)));
            break;
        default:
            pagoFinal = totalConIva;
            break;
    }
}else {
    console.log("No se hizo la compra");
}
} 

calcularTotal();

console.log("se termina la operacion");