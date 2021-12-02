const profile = {
    nickname: 'John',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age
        console.log(age);
    }
}

// const {nickname, age} = profile    >>> destructure an object
const {nickname, age}: {nickname: string, age: number} = profile

// destructure nested objects
const { coords: { lat, lng } } = profile

console.log(`My name is ${nickname} and I'm ${age} years old`);
console.log(`${lat} : ${lng}`);

profile.setAge(60); // doesn't allow us to change the value
console.log(`My name is ${nickname} and I'm ${age} years old`);
