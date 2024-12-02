function transformarArreglo(arreglo) {
    const transformado = arreglo.map(numero => {
        if (numero % 2 === 0) {
            return numero * 2;
        } else {
            return numero * numero;
        }
    });
    console.log("Arreglo original:", arreglo);
    console.log("Arreglo transformado:", transformado);
    return transformado;
}

const numeros = [1, 2, 3, 4, 5, 6];
transformarArreglo(numeros);