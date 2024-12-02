function buscarFruta(fruta) {
    const frutas = ['manzana', 'banana', 'naranja', 'uva', 'pera', 'kiwi', 'fresa', 'melocotón', 'sandía', 'piña'];
    
    const indice = frutas.indexOf(fruta.toLowerCase());
    
    if (indice !== -1) {
        console.log(`La fruta ${fruta} está en la posición ${indice} del arreglo`);
        return indice;
    } else {
        console.log(`La fruta ${fruta} no se encuentra en el arreglo`);
        return -1;
    }
}
buscarFruta('uva');
buscarFruta('manzana');
buscarFruta('papaya');