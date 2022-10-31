import { BaseError, ErrorArgs } from '@equinor/echo-base';

export class AuthenticationError extends BaseError {
    constructor(args: ErrorArgs) {
        super({ ...args, name: 'AuthenticationError' });
    }
}
