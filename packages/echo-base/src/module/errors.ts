import { BaseError } from '../errors';
import { ErrorArgs } from '../types/error';

export class ModulesMetaError extends BaseError {
    constructor(args: ErrorArgs) {
        super({ ...args, name: 'ModulesMetaError' });
    }
}
export class ModuleLoadingError extends BaseError {
    constructor(args: ErrorArgs) {
        super({ ...args, name: 'ModuleLoadingError' });
    }
}

export class ModulesEvaluationError extends BaseError {
    constructor(args: ErrorArgs) {
        super({ ...args, name: 'ModulesEvaluationError' });
    }
}
