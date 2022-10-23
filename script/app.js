let nombre = prompt("Bienvenido! Por favor ingresa tu nombre");

let comprar = prompt("Hola " + nombre + "! Quiere conocer nuestros descuentos? \n\n 1- Si \n 2- No");

if (comprar == "Si" || comprar == "si" || comprar == 1) {
    empezarCompra();
} else {
    alert("Gracias " + nombre + "! Esperamos vuelvas pronto, muchas gracias.");
};

function empezarCompra() {

    let tipo
    let precio
    let precioConDescuento
    let descuento
    let volverAEmpezar = 1

    while (volverAEmpezar == 1) {

        tipo = prompt("Ingrese el tipo de articulo que desea comprar: \n\n 1- Indumentaria \n 2- Electrodomesticos \n 3- Televisores \n 4- Celulares \n 5- Muebles ")
        precio = Number(prompt("Ingrese el precio del articulo que desea comprar: "))

        switch (tipo) {
            case "1":
            case "Indumentaria":
            case "indumentaria":
                alert("Este producto no tiene descuento. El precio a pagar es $" + precio)
                volverAEmpezar = prompt("¿Desea conocer el descuento de otro producto? \n 1- Si \n 2- No")
                break;
            case "2":
            case "Electrodomesticos":
            case "electrodomesticos":
                descuento = precio * (12 / 100)
                precioConDescuento = precio - descuento
                alert("Este tipo de producto tiene un descuento de 12%. El precio a pagar es $" + precioConDescuento)
                volverAEmpezar = prompt("¿Desea conocer el descuento de otro producto? \n 1- Si \n 2- No")
                break;
            case "3":
            case "Televisores":
            case "televisores":
                descuento = precio * (20 / 100)
                precioConDescuento = precio - descuento
                alert("Este tipo de producto tiene un descuento de 20%. El precio a pagar es $" + precioConDescuento)
                volverAEmpezar = prompt("¿Desea conocer el descuento de otro producto? \n 1- Si \n 2- No")
                break;
            case "4":
            case "Celulares":
            case "celulares":
                descuento = precio * (10 / 100)
                precioConDescuento = precio - descuento
                alert("Este tipo de producto tiene un descuento de 10%. El precio a pagar es $" + precioConDescuento)
                volverAEmpezar = prompt("¿Desea conocer el descuento de otro producto? \n 1- Si \n 2- No")
                break;
            case "5":
            case "Muebles":
            case "muebles":
                descuento = precio * (15 / 100)
                precioConDescuento = precio - descuento
                alert("Este tipo de producto tiene un descuento de 15%. El precio a pagar es $" + precioConDescuento)
                volverAEmpezar = prompt("¿Desea conocer el descuento de otro producto? \n 1- Si \n 2- No")
                break;
            default:
                alert("Este tipo de producto no tiene descuento.")
                volverAEmpezar = prompt("¿Desea conocer el descuento de otro producto? \n 1- Si \n 2- No")
        }
    }
}