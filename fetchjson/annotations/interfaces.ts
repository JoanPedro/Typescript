interface Vehicle {
  name: string,
  year: Date,
  broken: boolean,
  summary(): string
}

const oldCivis = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
}

const printVehicle = (vehicle: { name: string, year: Date, broken: boolean }): void => {
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
  Summary - ${vehicle.summary()}
`);
}

printVehicle(oldCivis);
printOtherVehicle(oldCivis);