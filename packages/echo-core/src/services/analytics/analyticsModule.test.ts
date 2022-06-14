import { addGlobalAnalyticsProperty, AnalyticsModule, analyticsSetUserCompany } from './analyticsModule';

addGlobalAnalyticsProperty({ key: 'instCode', value: 'ABC' });
addGlobalAnalyticsProperty({ key: 'globalProp1', value: 19 });
addGlobalAnalyticsProperty({ key: 'propertyOverwrittenByGlobal', value: 'correct_global_value' });

describe('analyticsModule preserve basic properties', () => {
    const analytics = new AnalyticsModule('module1', { staticEventProperties: { staticEventProp1: 99 } });
    it('createEventLog should preserve properties, objectName and actionName', () => {
        const eventLog = analytics.createEventLog('Camera', 'Opened', { property1: 'prop1', property2: 13 });
        expect(eventLog.eventName).toStrictEqual({ objectName: 'Camera', actionName: 'Opened' });
        expect(eventLog.properties).toStrictEqual({ property1: 'prop1', property2: 13 });
    });

    it('createAnalyticsPayload should preserve properties', () => {
        const eventLog = analytics.createEventLog('Camera', 'Opened', { property1: 'prop1', property2: 17 });
        analyticsSetUserCompany('should_convert_to_equinor');
        const payload = analytics.createAnalyticsPayload(eventLog);

        expect(payload['moduleName']).toBe('module1');
        expect(payload['context']).toBe('Camera');
        expect(payload['sessionKey']).toBeDefined();
        expect(payload['appVersion']).toBeDefined();
        expect(payload['isOnline']).toBeDefined();

        //event props
        expect(payload['property1']).toBe('prop1');
        expect(payload['property2']).toBe(17);

        //static props
        expect(payload['staticEventProp1']).toBe(99);

        //global props
        expect(payload['globalProp1']).toBe(19);
        expect(payload['instCode']).toBe('ABC');
        expect(payload['userCompany']).toBe('Equinor');
    });

    it('createAnalyticsPayload should preserve userCompany that is not equinor', () => {
        const eventLog = analytics.createEventLog('Camera', 'Opened', { property1: 'prop1' });
        analyticsSetUserCompany('X-AnotherCompany');

        const payload = analytics.createAnalyticsPayload(eventLog);
        expect(payload['userCompany']).toBe('AnotherCompany');

        analyticsSetUserCompany('x-AnotherCompany2');
        const payload2 = analytics.createAnalyticsPayload(eventLog);
        expect(payload2['userCompany']).toBe('AnotherCompany2');
    });
});

describe('analyticsModule static & global properties and overwrites', () => {
    it('createAnalyticsPayload: static property should overwrite event property with the same name', () => {
        const analytics = new AnalyticsModule('module2', {
            staticEventProperties: { propertyOverwritten: 'correct_value' }
        });
        const eventLog = analytics.createEventLog('_', '_', {
            propertyOverwritten: 'value_should_be_overwritten_by_staticValue'
        });
        const payload = analytics.createAnalyticsPayload(eventLog);

        expect(payload['moduleName']).toBe('module2');
        expect(payload['propertyOverwritten']).toBe('correct_value');
    });

    it('createAnalyticsPayload: global property should overwrite static and event property with same name', () => {
        const analytics = new AnalyticsModule('module3', {
            staticEventProperties: { propertyOverwrittenByGlobal: 'static_value_to_be_overwritten' }
        });
        const eventLog = analytics.createEventLog('_', '_', {
            propertyOverwrittenByGlobal: 'value_to_be_overwritten'
        });
        const payload = analytics.createAnalyticsPayload(eventLog);

        expect(payload['moduleName']).toBe('module3');
        expect(payload['globalProp1']).toBe(19);
        expect(payload['propertyOverwrittenByGlobal']).toBe('correct_global_value');
    });
});
