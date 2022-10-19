// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

const temperaturas = [
    {
        dia: 1,
        mes: 2,
        tempBajo: 3
    }, {
        dia: 2,
        mes: 2,
        tempBajo: 1
    }, {
        dia: 3,
        mes: 2,
        tempBajo: 10
    }, {
        dia: 4,
        mes: 2,
        tempBajo: 9
    }, {
        dia: 5,
        mes: 2,
        tempBajo: 2
    },
    {
        dia: 1,
        mes: 2,
        tempBajo: 6
    }
]

const array = [2, 1, 10, 5]

const orderTemp = function (temperaturas) {
    for (let i = 0; i < temperaturas.length; i++) {
        for (let j = 0; j < temperaturas.length - 1; j++) {
            if (temperaturas[j].tempBajo < temperaturas[j + 1].tempBajo) {
                let valueRight = temperaturas[j + 1]
                temperaturas[j + 1] = temperaturas[j]
                temperaturas[j] = valueRight
            }
        }
    }

    console.log(temperaturas)

}





orderTemp(temperaturas)
