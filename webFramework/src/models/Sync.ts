import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<Type extends HasId> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save = (data: Type): AxiosPromise => {
    const { id }: HasId = data;

    if(id) {
      return axios.put(`http://localhost:3000/users/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
