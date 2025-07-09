import { User } from "../../domain/entities/user.entity";
import { RegisterUserDto } from "../../dto/register-user.dto";

export interface IRegisterUserPort {
    execute(dto: RegisterUserDto): Promise<User>;
}