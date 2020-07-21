import { User } from './models/User'

const user = new User({});
user.on('change', () => {
  console.log('Change1')
});
user.on('change', () => {
  console.log('Change2')
});
user.on('save', () => {
  console.log('Save was trigger')
});

user.trigger('change');
user.trigger('save');

console.log(user);