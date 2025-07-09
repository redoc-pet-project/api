import { IPasswordHasherPort } from "../../ports/outbound/password-hasher.port";


export class User {
    constructor(
        public readonly id: string,
        public username: string,
        public password: string,
    ) { }

    async isPasswordMatch(password: string, hasher: IPasswordHasherPort): Promise<boolean> {
        return await hasher.compare(password, this.password);
    }
}