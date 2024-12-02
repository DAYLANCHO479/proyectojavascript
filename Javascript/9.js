function sumarDigitos(numero) {
    const digitos = String(numero).split('').map(Number);
    const suma = digitos.reduce((acumulador, digito) => acumulador + digito, 0);
    
    console.log(`Suma de dígitos de ${numero}: ${suma}`);
    
    return suma;
}

sumarDigitos(1234);
sumarDigitos(5678); 