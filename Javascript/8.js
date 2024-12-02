function esPalindromo(entrada) {
    const cadena = String(entrada).toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverso = cadena.split('').reverse().join('');
    
    const resultado = cadena === reverso;
    
    console.log(`¿${entrada} es palíndromo? ${resultado}`);
    
    return resultado;
}

esPalindromo(12321);
esPalindromo("A man, a plan, a canal: Panama")
esPalindromo(12345);