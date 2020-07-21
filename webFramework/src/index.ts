import { User } from './models/User'

const user = new User({name: 'Joan Pedro', age: 20});
console.log(`
  Nome: ${user.get('name')},
  Idade: ${user.get('age')}
`);