import { Collection } from './models/Collection'

const collection = new Collection('http://localhost:3000/users')

collection.on('change', () => {
    console.log(collection);
})

collection.fetch();

//npm run start:db
//npm run start:parcel
