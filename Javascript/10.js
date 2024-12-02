function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function encontrarPrimos(cantidadNumeros) {
    const numeros = Array.from(
        {length: cantidadNumeros}, 
        () => Math.floor(Math.random() * 100) + 1
    );
    const primos = numeros.filter(esPrimo);
    
    console.log("Números generados:", numeros);
    console.log("Números primos:", primos);
    
    return primos;
}

encontrarPrimos(20);