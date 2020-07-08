class Vehicle {
  public drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  private driving(): void {
    console.log('Vrooom...');
  }

  startDriven(): void {
    this.drive(); // Public
    this.honk(); // Protected
    this.driving(); // Private
  }
}

const car = new Car();
car.drive();
// Não pode (Private) -> car.driving();
// Não pode (Protected) -> car.driving();
car.startDriven();