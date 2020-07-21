import { User } from './models/User'

const user = new User({});
console.log(`
  Nome: ${user.get('name')},
  Idade: ${user.get('age')}
`);

user.set({name: 'Joan de Souza', age: 23});
console.log(`
  Novo Nome: ${user.get('name')},
  Nova Idade: ${user.get('age')}
`);