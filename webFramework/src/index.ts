import { User } from './models/User';
 
const user = new User({ id: 1, name: 'Joan de Souza', age: 22 });

user.on('save', () => {
  console.log(user);
})

user.save(); 
 