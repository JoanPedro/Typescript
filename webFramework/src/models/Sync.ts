import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<Type extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: Type): void {
    const { id }: HasId = data;

    if(id) {
      axios.put(`http://localhost:3000/users/${id}`, data);
    } else {
      axios.post(this.rootUrl, data);
    }
  }
}
