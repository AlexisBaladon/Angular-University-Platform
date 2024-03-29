import { Filterable } from "../logic/filter/filterable";

class User extends Filterable {
    email: string;
    name: string;
    surname: string;
    password: string;
    profile: 'user' | 'admin';
    direction?: string;
    phone?: string;

    getShownAttributes(): string[] {
        return ['id', 'name', 'email', 'profile'];
    }

    constructorName(): string {
        return 'User';
    }

    constructor(id: string, email: string, name: string, surname: string, password: string, profile: 'user' | 'admin', direction?: string, phone?: string) {
        super(id);
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.direction = direction;
        this.phone = phone;
        this.profile = profile;
    }
}

export const isUser = (filterable: Filterable): filterable is User => {
    return filterable instanceof User;
}

export default User;