function clasificarEdades(edades) {
    const grupos = {
        ninos: 0,
        adolescentes: 0,
        adultosJovenes: 0,
        adultos: 0,
        adultosMayores: 0
    };
    
    edades.forEach(edad => {
        if (edad >= 0 && edad <= 12) {
            grupos.ninos++;
        } else if (edad >= 13 && edad <= 17) {
            grupos.adolescentes++;
        } else if (edad >= 18 && edad <= 35) {
            grupos.adultosJovenes++;
        } else if (edad >= 36 && edad <= 60) {
            grupos.adultos++;
        } else if (edad > 60) {
            grupos.adultosMayores++;
        }
    });
    
    console.log("Clasificación de edades:", grupos);
    
    return grupos;
}

const edades = [8, 15, 25, 40, 65, 10, 20, 55, 70, 16];
clasificarEdades(edades);