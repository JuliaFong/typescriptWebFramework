import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

const on = user.on;


user.on('change', () => {
    console.log('user was changed')
})
//npm run start:db
//npm run start:parcel
