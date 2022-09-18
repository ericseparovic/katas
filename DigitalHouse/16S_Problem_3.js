// EJERCICIO 3
// Write a funtion that, given a month number, returns the number of days in this month 
let mes = 1
const cantidadDias = function (mes) {

    let date = new Date(2021, mes - 1, 0).getDate()
    console.log(date)
}


cantidadDias(mes)