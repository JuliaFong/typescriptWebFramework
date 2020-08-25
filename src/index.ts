import { User } from './models/User'

const user = new User({name: "yourname", age:20})

user.on('meow', () => {
    console.log('meow #1')
})
user.on('meow', () => {
    console.log('meow #2')
})
user.on('save', () => {
    console.log('save was triggered')
})

user.trigger('meow')

//npm run start:db
//npm run start:parcel
