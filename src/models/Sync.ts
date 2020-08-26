import axios, { AxiosResponse } from 'axios';
import { UserProps } from './User';

new Sync('http://localhost:3000/users');
export class Sync {
    constructor(public rootUrl: string) {}

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`).then(
            (response: AxiosResponse): void => {
            this.set(response.data);
        });
    }

    save(): void {
        const id = this.get('id');
       if (id) {
           //put
           axios.put(`http://localhost:3000/users/${id}`, this.data)
       } else {
           //post
           axios.post('http://localhost:3000/users', this.data);
       }
    }
}