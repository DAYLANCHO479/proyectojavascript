function ordenarBurbuja(arreglo) {
    const n = arreglo.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }
    
    console.log("Arreglo ordenado:", arreglo);
    return arreglo;
}

const numerosDesordenados = [64, 34, 25, 12, 22, 11, 90];
ordenarBurbuja(numerosDesordenados);