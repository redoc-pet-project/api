import { LoginUserDto } from "../../dto/login-user.dto";

export interface ILoginUserPort {
    execute(dto: LoginUserDto): Promise<{ token: string }>;
}