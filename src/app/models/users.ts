export class Users {
    _id: string;
    name: string;
    email: string;
    password: string;
    type: number;
     points: number;

    constructor(_id = '',name = '', email = '', password = '', type = 1, points = 100){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.points = points;
    }
}
