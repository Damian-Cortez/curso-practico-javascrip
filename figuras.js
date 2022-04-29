// //Cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El Perimetro del cuadrado mide: " + perimetroCuadrado + "cm" );

function perimetroCuadrado(lado){
    return lado * 4;
} 

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El Area del cuadrado mide: " + areaCuadrado + "cm2")

function areaCuadrado(lado) {
    return lado * lado;
} 
console.groupEnd();

// //Triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const alturaTriangulo = 5.5;
// const baseTriangulo = 4;
// console.log("Los lados del Triangulo miden: " + ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El Perimetro del Trianguloo mide: " + perimetroTriangulo + "cm" );
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

// const areaTriangulo = (baseTriangulo * baseTriangulo) / 2 ;
// console.log("El Area del Triangulo mide: " + areaTriangulo + "cm2")
function areaTriangulo(base, altura) {
return (base * altura) / 2 ;
}
console.groupEnd();

// //Circulo
console.group("Circulo");
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const pi = Math.PI;

// console.log("El radio del Circulo mide: " + radioCirculo + "cm");
// console.log("El diametro del Circulo mide: " + diametroCirculo + "cm");
// console.log("PI mide: " + pi);

// const perimetroCirculo = diametroCirculo * pi;
// console.log("El Perimetro del Circulo mide: " + perimetroCirculo + "cm" );
function perimetroCirculo(radio){
    const diametroCirculo = radio * 2;
    return diametroCirculo * Math.PI;
} 

// const areaCirculo = (radioCirculo * radioCirculo) * pi;
// console.log("El Area del Circulo mide: " + areaCirculo + "cm2")
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
} 
console.groupEnd();