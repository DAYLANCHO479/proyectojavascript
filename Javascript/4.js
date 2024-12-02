function invertirArreglo(arreglo) {
    const longitud = arreglo.length;
    
    for (let i = 0; i < Math.floor(longitud / 2); i++) {
        let temp = arreglo[i];
        arreglo[i] = arreglo[longitud - 1 - i];
        arreglo[longitud - 1 - i] = temp;
    }
    console.log("Arreglo invertido:", arreglo);
    return arreglo;
}

const arregloFinal = [1, 2, 3, 4, 5];
invertirArreglo(arregloFinal);