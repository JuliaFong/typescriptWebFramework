import { User } from './models/User';

const user = new User({ id: 1 });

 user.on('change', () => {
     console.log('user')
 })

 user.fetch();

//npm run start:db
//npm run start:parcel
