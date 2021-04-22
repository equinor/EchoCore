import { AppMetaData, SingleModule } from '../types/module';

/**
 *
 *
 * @export
 * @param {string} id
 */
export function removeElementById(id: string): void {
    document.getElementById(id)?.remove();
}
/**
 *
 *
 * @export
 * @param {*} f
 * @return {*}  {f is Function}
 */
export function isfunc(f: unknown): f is Function {
    return typeof f === 'function';
}

/**
 *
 *
 * @export
 * @param {AppMetaData} meta
 * @return {*}  {SingleApp}
 */
export function createEmptyApp(meta: AppMetaData): SingleModule {
    return {
        ...meta,
        setup(): void {
            // Empty module
        }
    };
}
