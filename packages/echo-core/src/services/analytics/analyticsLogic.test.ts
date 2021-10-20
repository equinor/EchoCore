import {
    appWithModuleName,
    eventNameToString,
    lowerCaseFirstLetter,
    ObfuscatedUser,
    obfuscateUser,
    upperCaseFirstLetter
} from './analyticsLogic';
import { AnalyticsEventName } from './analyticsTypes';

describe('obfuscatedUser', () => {
    it('should return sha256 userId and correct lowercase domain', () => {
        const userId = '328a4ada-128c-4f2b-a78f-93f989be39dc';
        const userName = 'normalUser@EQuinor.COM';
        const actual = obfuscateUser(userName, userId);

        const expected: ObfuscatedUser = { id: '660a558443f7bc7c597a2041795988b85c08e7e6', domain: 'equinor.com' };
        expect(actual).toEqual(expected);
    });

    it('should return no domain for invalid email', () => {
        const userName = 'notAnEmail';
        const actual = obfuscateUser(userName, '');

        expect(actual.domain).toEqual('no domain');
    });
});

describe('appInsights: upperCaseFirstLetter', () => {
    it('userName should return UserName', () => {
        const actual = upperCaseFirstLetter('userName');
        expect(actual).toEqual('UserName');
    });
});

describe('appInsights: lowerCaseFirstLetter', () => {
    it('UserName should return userName', () => {
        const actual = lowerCaseFirstLetter('UserName');
        expect(actual).toEqual('userName');
    });
});

describe('appInsights: eventNameToString with correct casing', () => {
    it('should convert to ep.AnObject.ClickedAndOpened', () => {
        const eventName: AnalyticsEventName = { objectName: 'anObject', actionName: 'clickedAndOpened' };
        const actual = eventNameToString('ep', eventName);
        expect(actual).toEqual('ep.AnObject.ClickedAndOpened');
    });
    it('should convert to moduleName to subModule format: ep_moduleName.AnObject.ClickedAndOpened', () => {
        const eventName: AnalyticsEventName = { objectName: 'anObject', actionName: 'clickedAndOpened' };
        const actual = eventNameToString('ModuleName', eventName);
        expect(actual).toEqual('ep_moduleName.AnObject.ClickedAndOpened');
    });
});

describe('appInsights: appWithModuleName with correct casing', () => {
    it('default ep should return ep', () => {
        const actual = appWithModuleName('ep');
        expect(actual).toEqual('ep');
    });
    it('subModule should return : ep_subModule', () => {
        const actual = appWithModuleName('SubModule');
        expect(actual).toEqual('ep_subModule');
    });
});
