class Vehicle {
  // color: string = 'red';
  // public color: string = 'red' <=> this.color = color;
  //  constructor(public color: string = 'Red')
  constructor(public color: string) { }

  public drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep')
  }
}

const vehicleOrange = new Vehicle('Orange');
const vehicleRed = new Vehicle('Red');
console.log(vehicleOrange.color)
console.log(vehicleRed.color)

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private driving(): void {
    console.log('Vrooom...');
  }

  startDriven(): void {
    this.drive(); // Public
    this.honk(); // Protected
    this.driving(); // Private
  }
}

const car = new Car(4, 'Withe');
car.drive();
// Não pode (Private) -> car.driving();
// Não pode (Protected) -> car.driving();
car.startDriven();
console.log(car.color)