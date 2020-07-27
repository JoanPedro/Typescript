import { AxiosPromise } from "axios";

type Callback = () => {}

interface ModelAttributes<Type> {
  get<ObjKey extends keyof Type>(key: ObjKey): Type[ObjKey];
  set(value: Type): void;
  getAll(): Type;
}

interface Sync<Type> {
  fetch(id: number): AxiosPromise;
  save(data: Type): AxiosPromise;
}

interface Events {
  on(eventName: string, callback:  Callback): void;
  trigger(eventName: string): void;
}

export class Model {

}