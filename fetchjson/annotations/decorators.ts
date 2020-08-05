const testDecorator = (target: any, key: string): void => {
  console.log('Target: ', target);
  console.log('Key: ', key);
}

class Boat {
  color: string  = 'red';

  get formatedCollor(): string {
    return `This boat is ${this.color}`;
  }

  @testDecorator
  pilot = (): void => {
    console.log('Swish');
  }
}
