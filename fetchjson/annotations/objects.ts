const profile = {
  name: 'Joan',
  age: 22,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
// const { lat, long }: { lat: number, long: number } = profile.coords;
const {
  coords: { lat, long }
}: { coords: { lat: number, long: number } } = profile;
