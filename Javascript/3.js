function numero(arreglo) {
    const promedio = arreglo.reduce((a, b) => a + b) / arreglo.length;
    const mayor = Math.max(...arreglo);
    const menor = Math.min(...arreglo);
    const suma = arreglo.reduce((a, b) => a + b);
    
    console.log("Promedio:", promedio);
    console.log("Mayor:", mayor);
    console.log("Menor:", menor);
    console.log("Suma total:", suma);
    
    return { promedio, mayor, menor, suma };
}

const numeros = [10, 5, 8, 15, 3, 20];
numero(numeros);