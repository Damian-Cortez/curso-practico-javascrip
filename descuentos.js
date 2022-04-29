// const precioOriginal = 100;
// const descuento = 15;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento =(precioOriginal * porcentajePrecioConDescuento) / 100;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento =(precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}

function onClickCalcularDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText ="El Precio con Descuento es: $" + precioConDescuento
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })