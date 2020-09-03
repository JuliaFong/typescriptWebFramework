import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './models/User';

const users = new Collection('http://localhost:3000/users', 
(json: UserProps) => {
    return User.buildUser(json);
    }
);


//npm run start:db
//npm run start:parcel
