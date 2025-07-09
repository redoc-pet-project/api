import { Injectable } from "@nestjs/common";
import { v4 } from "uuid";
import { BadRequest } from "../../../../core/common/exceptions/bad-request.exception";
import { Conflict } from "../../../../core/common/exceptions/conflict.exception";
import { User } from "../../domain/entities/user.entity";
import { RegisterUserDto } from "../../dto/register-user.dto";
import { IRegisterUserPort } from "../../ports/inbound/register-user.port";
import { IPasswordHasherPort } from "../../ports/outbound/password-hasher.port";
import { IUserRepositoryPort } from "../../ports/outbound/user-repository.port";

@Injectable()
export class RegisterUserUseCase implements IRegisterUserPort {
    constructor(
        private readonly userRepository: IUserRepositoryPort,
        private readonly passwordHaser: IPasswordHasherPort
    ) { }

    async execute(dto: RegisterUserDto): Promise<User> {
        const existingUser = await this.userRepository.findByUsername(dto.username);
        if (existingUser) {
            throw new Conflict('USER_ALREADY_EXIST');
        }

        try {
            const hashed = await this.passwordHaser.hash(dto.password);
            const user = new User(v4(), dto.username, hashed);
            return this.userRepository.save(user);
        } catch (err) {
            // logger log err

            throw new BadRequest('REGISTER_USER_FAILED');
        }
    }
}