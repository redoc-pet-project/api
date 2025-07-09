export interface ITokenServicePort {
    generateToken(payload: Record<string, any>): string;
}