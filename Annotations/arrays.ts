const carMakers = ['ford', 'toyota', 'chevy']

let carsByMake: string[] = []

// carMakers.push(100)   // error
// carsByMake.push(100)  // error

// car: ):string  >>> specify return type
carsByMake = carMakers.map((car: string):string=> {
    return car.toUpperCase()
})

console.log(carsByMake);



const importantDates: (Date | string)[] = []
importantDates.push('2021-11-30')
importantDates.push(new Date())
//importantDates.push(true) // error

console.log(importantDates)




