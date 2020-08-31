import { User } from './models/User';


const collection = User.buildUserCollection()

collection.on('change', () => {
    console.log(collection);
})

collection.fetch();

//npm run start:db
//npm run start:parcel
