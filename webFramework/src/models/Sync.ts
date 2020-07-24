import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

interface id {
  id?: number;
}

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): void {
    const { id }: id = data;

    if(id) {
      axios.put(`http://localhost:3000/users/${id}`, data);
    } else {
      axios.post(this.rootUrl, data);
    }
  }
}
