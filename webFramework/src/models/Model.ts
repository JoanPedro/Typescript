import { AxiosPromise, AxiosResponse } from "axios";

type Callback = () => void

interface HasId {
  id?: number
}

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

export class Model<Type extends HasId> {
  constructor(
    private attributes: ModelAttributes<Type>,
    private events: Events,
    private sync: Sync<Type>
  ) {}

  // Retorna os ponteiros das funções, não invocando-as inicialmente. Deixando para quem criou a instância
  // de 'User' esta responsabilidade.
  on = this.events.on;
  trigger = this.events.trigger;
  get =  this.attributes.get;

  set = (update: Type): void => {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch = (): void => {
    const id: number | undefined = this.get('id'); // User.get('id')

    if(typeof id !== 'number') {
      throw new Error('Cannot fetch without an id!');
    }

    this.sync.fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
  }

  save = (): void => {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .then((error): void => {
        this.trigger('error')
      })
  }
}
