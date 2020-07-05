let carMakers: string[];
carMakers = ['Ford', 'Toyota', 'Chevy'];
const aCarMakers = ['Ford', 'Toyota', 'Chevy'];

let dates: Date[];
dates = [new Date(), new Date()];
const aDates = [new Date(), new Date()];

let carByMake: string[][];
carByMake = [
  ['F150'],
  ['Corolla'],
  ['Camaro']
]
const aCarByMake = [
  ['F150'],
  ['Corolla'],
  ['Camaro']
]

let carModel: { name: string, age: number }[];
carModel = [
  { name: 'FordKa', age: 2010 },
  { name: 'Onyx', age: 2005 },
  { name: 'Gol', age: 2000 }
]

const aCarModel = [
  { name: 'FordKa', age: 2010 },
  { name: 'Onyx', age: 2005 },
  { name: 'Gol', age: 2000 }
]

interface CarModel {
  name: string,
  age: number
}

let altCarModel: CarModel[];
altCarModel = [
  { name: 'FordKa', age: 2010 },
  { name: 'Onyx', age: 2005 },
  { name: 'Gol', age: 2000 }
]

// Help with inferences when extracting values
const cars = carMakers[0];
const MyCars = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
/* Map with Car like string params and returns a string types too. 
  * With this, the typescript help us with the intellisense sugest all methods of
  * string types... like: .lenght, .toUpperCase... 
*/
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexibles types
let importantDates: (Date | string)[];
importantDates = [new Date(), '2030-10-10'];
const aImportantDates = [new Date(), '2030-10-10'];