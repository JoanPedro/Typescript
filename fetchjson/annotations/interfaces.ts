interface Vehicle {
  name: string,
  year: number,
  broken: boolean
}

const oldCivis = {
  name: 'civic',
  year: 2000,
  broken: true
}

const printVehicle = (vehicle: { name: string, year: number, broken: boolean }): void => {
  console.log(`
    Name: ${vehicle.name},
    Year: ${vehicle.year},
    Broken: ${vehicle.broken}
  `);
}

const printOtherVehicle = (vehicle: Vehicle): void => {
  console.log(`
  Name: ${vehicle.name},
  Year: ${vehicle.year},
  Broken: ${vehicle.broken}
`);
}

printVehicle(oldCivis);
printOtherVehicle(oldCivis);