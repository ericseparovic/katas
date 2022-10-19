// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 
// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?


const crearArray = function (row, column) {
    const array = []

    let count = 0;
    for (let i = 0; i < row; i++) {
        array[i] = []
        for (let j = 0; j < column; j++) {
            array[i][j] = count
            count++

        }
    }

    return array
}





// a sumar gastos totales por semana
const addExpensesForWeek = function (week, expensesMonth = crearArray(4, 7)) {
    let total = 0;
    for (let i = 0; i < expensesMonth[week - 1].length; i++) {
        total += expensesMonth[week - 1][i]
    }
    return console.log(total)

}

// addExpensesForWeek(1)


const expensesForDay = function (day, expensesMonth = crearArray(4, 7)) {

    let count = 0;
    for (let i = 0; i < expensesMonth.length; i++) {
        for (let j = 0; j < expensesMonth[i].length; j++) {
            count++
            if (day == count) return console.log(expensesMonth[i][j])
        }

    }
}
// expensesForDay(28)


const expensesTotalForMonth = function (expensesMonth = crearArray(4, 7)) {
    let total = 0;
    for (let i = 0; i < expensesMonth.length; i++) {
        for (let j = 0; j < expensesMonth[i].length; j++) {
            total += expensesMonth[i][j]

        }
    }
    return console.log(total);
}


// expensesTotalForMonth()


// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// Posibles matrices para comprobar los resultados. 

const weekMoreExpenses = function (expensesMonth = crearArray(4, 7)) {
    let expensesForWeek = []
    for (let i = 0; i < expensesMonth.length; i++) {
        let total = 0

        for (let j = 0; j < expensesMonth[i].length; j++) {


            total += expensesMonth[i][j]
        }

        expensesForWeek = [...expensesForWeek, total]


    }
    console.log(expensesForWeek)

    return expensesForWeek

}


const findWeekMoreExpenses = function (array = weekMoreExpenses()) {
    let mayor = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] > mayor) mayor = array[i]


    }

    return console.log(mayor)
}

findWeekMoreExpenses()