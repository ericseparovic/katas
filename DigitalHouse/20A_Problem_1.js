let personas = [
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180
    }
];


const orderPersons = function (personas) {
    for (let i = 0; i < personas.length; i++) {
        for (let j = 0; j < personas.length - 1; j++) {
            if (personas[j].estatura < personas[j + 1].estatura) {
                let estatura = personas[j + 1]
                personas[j + 1] = personas[j]
                personas[j] = estatura
            }
        }
    }

    return console.log(personas);
}


orderPersons(personas)