import { User } from './models/User'

const user = new User({name: "yourname", age:20})

user.set({ name: 'newname', age: 666 })


console.log(user.get('name'))
console.log(user.get('age'))