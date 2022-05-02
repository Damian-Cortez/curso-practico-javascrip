// Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calcualdora de medianas
function mediaSalarios(lista){
    const mitad =parseInt(lista.length / 2);
    
    if (esPar(lista.length) ){
        const PersonitaMitad1 = lista[mitad - 1];
        const PersonitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([PersonitaMitad1, PersonitaMitad2]);
        return mediana;
    
        // const promedioE1y2 = calcularMediaAritmetica([
        //     elemento1,
        //     elemento2,
        //]);
    } else {
        const PersonitaMitad = lista[mitad];
        return PersonitaMitad;
    }
}

// Mediana General
const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA- salaryB;
    }
);

const medianaGeneralCol = mediaSalarios(salariosColSorted);

// Mediana del top 10% General

const spliceStart = (salariosColSorted.length * 90) /100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = mediaSalarios(salariosColTop10);


console.log(
    medianaGeneralCol,
    medianaTop10Col,
);