export class Attributes<Type> {
  constructor(private data: Type) {}

  get = <ObjKey extends keyof Type>(key: ObjKey): Type[ObjKey] => {
    return this.data[key];
  }
  
  set = (update: Type): void => {
    Object.assign(this.data, update);
  }
}

// const arrowFunciton = (elements: string[]): string[] => {
//   return elements.map( element => element + 'Arrow');
// }