import { HttpException, HttpStatus } from "@nestjs/common";

export class BadRequest extends HttpException {
    constructor(message: string = 'BAD_REQUEST') {
        super(message, HttpStatus.BAD_REQUEST);
    }
}