import sha1 from 'sha1';
import { EventName } from './appInsightTypes';

export interface ObfuscatedUser {
    id: string;
    domain: string;
}

//https://github.com/equinor/Echo/blob/master/docs/client-analytics.md
export function obfuscateUser(userName: string, userId: string): ObfuscatedUser {
    const domain = userName.includes('@') ? userName.split('@')[1].toLowerCase() : 'no domain';
    return { id: sha1(userId), domain };
}

export function upperCaseFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function lowerCaseFirstLetter(value: string): string {
    return value.charAt(0).toLocaleLowerCase() + value.slice(1);
}

export function eventNameToString(moduleName: string, eventNameItem: EventName): string {
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
