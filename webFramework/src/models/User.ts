import { Model } from "./Model";
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps>{ // this === User
  static buildUser = (attrs: UserProps): User => {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

  isAdminUser = (): boolean => {
    return this.get('id') === 1;
  }
}
