import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class ApiSync<Type extends HasId> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save = (data: Type): AxiosPromise => {
    const { id }: HasId = data;

    if(id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
