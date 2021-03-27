import BaseError from './BaseError';

interface ArgumentErrorArgs {
    argumentName: string;
}

export default class ArgumentError extends BaseError {
    constructor({ argumentName }: ArgumentErrorArgs) {
        super({ message: argumentName });
    }
}
