import sha256 from 'sha256';
import { AnalyticsEventName } from './analyticsTypes';

export interface ObfuscatedUser {
    id: string;
    domain: string;
}

//https://github.com/equinor/Echo/blob/master/docs/client-analytics.md
export function obfuscateUser(userName: string, userId: string): ObfuscatedUser {
    const domain = userName.includes('@') ? userName.split('@')[1].toLowerCase() : 'no domain';
    return { id: sha256(userId), domain };
}

export function upperCaseFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function lowerCaseFirstLetter(value: string): string {
    return value.charAt(0).toLocaleLowerCase() + value.slice(1);
}

export function eventNameToString(moduleName: string, eventNameItem: AnalyticsEventName): string {
    const name = appWithModuleName(moduleName);
    return `${name}.${upperCaseFirstLetter(eventNameItem.objectName)}.${upperCaseFirstLetter(
        eventNameItem.actionName
    )}`;
}

export function appWithModuleName(moduleName: string): string {
    let name = 'ep';
    if (moduleName.toLowerCase() !== 'ep') name += '_' + lowerCaseFirstLetter(moduleName);
    return name;
}
