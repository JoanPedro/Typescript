import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection<Type, KType> {
  models: Type[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialise: (json: KType) => Type
    ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch = (): void => {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse): void => {
        response.data.forEach((value: KType): void => {
          this.models = [...this.models, this.deserialise(value)]
        });
      });
    
    this.trigger('change');
  }
}