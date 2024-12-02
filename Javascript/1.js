function numerosPares() {
    let numeros = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
    let pares = numeros.filter(numero => numero % 2 === 0);

    console.log("Números pares:", pares);
    
    return pares;
}

numerosPares();