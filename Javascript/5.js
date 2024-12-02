function eliminarDobles(cadena) {
    const resultado = [...new Set(cadena)].join('');
    
    console.log(`Texto original: ${cadena}`);
    console.log(`Sin duplicados: ${resultado}`);
    
    return resultado;
}

eliminarDobles("Cosmologias");
eliminarDobles("Mississippi");
eliminarDobles("programasas");