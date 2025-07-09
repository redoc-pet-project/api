import { User } from "../../domain/entities/user.entity";

export interface IUserRepositoryPort {
    findByUsername(username: string): Promise<User | null>;
    save(user: User): Promise<User>;
}