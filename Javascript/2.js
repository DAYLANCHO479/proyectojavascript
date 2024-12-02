function contadorVocales(texto) {
    texto = texto.toLowerCase();
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const vocalesNum = texto.split('').filter(letra => vocales.includes(letra)).length;
    
    console.log(`El texto "${texto}" tiene ${vocalesNum} vocales`);
    
    return vocalesNum;
}

contadorVocales("La base de datos de virus, ha sido actualizada :)"); // Ejemplo de uso