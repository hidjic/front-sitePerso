export class User {
    id?: string;
    constructor(    public email: string,
                    public password: string,
                    public isAuth: boolean = false) {}
}
