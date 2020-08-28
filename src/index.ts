import { User } from './models/User';

const user = new User({ name: 'cat', age: 0 });

 console.log(user.get('name'))

 user.on('change', () => {
     console.log('Changed userrrr')
 })

 user.trigger('change')

//npm run start:db
//npm run start:parcel
