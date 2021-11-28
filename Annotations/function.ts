const add = (a:number, b:number): number => {
    // return a + b + '10'
    return a + b + 10
}

console.log(add(2,3));

// ====================================================
const logger = (message:string):void => {
    console.log(message)
    return message + "!!!!"   // returns string rather than void
}

logger("HELLO THERE!!")

// ====================================================

// ? >>> optional
const throwError = (message?: string):void => {
    if(message){
        throw new Error(message)
    }
    throw new Error("DEFAULT ERROR MESSAGE")
} 

throwError()

// ====================================================

const todaysWeather = {
    date: new Date(),
    weather: 'cloudy'
}

// { date, weather } >> destructure 
const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather)

