import { HttpException, HttpStatus } from "@nestjs/common";

export class Conflict extends HttpException {

    constructor(message: string = 'CONFLICT') {
        super(message, HttpStatus.CONFLICT);
    }

}