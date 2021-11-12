import { ITelemetryItem } from '@microsoft/applicationinsights-core-js';
import { analyticsConfiguration } from './analytics';
import { telemetryFilterShouldInclude } from './analyticsTelemetryFilter';
import { AnalyticsNameFilterFunction } from './analyticsTypes';

const telemetryItemTestData: ITelemetryItem = { name: 'name', baseData: { name: 'baseDataName', uri: 'fakeUri' } };

describe('telemetryFilterShouldInclude & addTelemetryNameFilter', () => {
    it(`should include telemetry item, if no filtering is applied`, () => {
        const actual = telemetryFilterShouldInclude(telemetryItemTestData);
        expect(actual).toEqual(true);
    });

    it(`after add filter it should exclude on name, and after remove filter it shouldn't exclude`, () => {
        // given
        const telemetryExcludeFunctionMatch: AnalyticsNameFilterFunction = {
            shouldExclude: (name: string): boolean => name === 'baseDataName'
        };

        // when
        analyticsConfiguration.addTelemetryNameFilter(telemetryExcludeFunctionMatch);
        const actualExcluded = telemetryFilterShouldInclude(telemetryItemTestData);

        // then
        expect(actualExcluded).toEqual(false);

        // when
        analyticsConfiguration.removeTelemetryNameFilter(telemetryExcludeFunctionMatch);
        const actualIncluded = telemetryFilterShouldInclude(telemetryItemTestData);

        // then
        expect(actualIncluded).toEqual(true);
    });

    it(`after add filter it should exclude on telemetryItem.uri.baseData, and after remove filter it shouldn't exclude`, () => {
        // given
        const telemetryExcludeFunctionMatch: AnalyticsNameFilterFunction = {
            shouldExclude: (_name: string, telemetryItem: ITelemetryItem): boolean =>
                (((telemetryItem?.baseData ?? {})['uri'] as string) ?? '').includes('fakeUri')
        };

        // when
        analyticsConfiguration.addTelemetryNameFilter(telemetryExcludeFunctionMatch);
        const actualExcluded = telemetryFilterShouldInclude(telemetryItemTestData);

        // then
        expect(actualExcluded).toEqual(false);

        // when
        analyticsConfiguration.removeTelemetryNameFilter(telemetryExcludeFunctionMatch);
        const actualIncluded = telemetryFilterShouldInclude(telemetryItemTestData);

        // then
        expect(actualIncluded).toEqual(true);
    });

    it(`should not exclude if filter has mismatch on baseData.name`, () => {
        // given
        const telemetryExcludeFunctionMisMatch: AnalyticsNameFilterFunction = {
            shouldExclude: (name: string): boolean => name === 'mismatchOnName'
        };

        // when
        analyticsConfiguration.addTelemetryNameFilter(telemetryExcludeFunctionMisMatch);
        const actualIncluded = telemetryFilterShouldInclude(telemetryItemTestData);

        // then
        expect(actualIncluded).toEqual(true);

        analyticsConfiguration.removeTelemetryNameFilter(telemetryExcludeFunctionMisMatch);
    });

    it(`multiple filters should exclude if 1 filter is matching baseData.name`, () => {
        // given
        const telemetryExcludeFunctionMisMatch: AnalyticsNameFilterFunction = {
            shouldExclude: (name: string): boolean => name === 'mismatchOnName'
        };

        const telemetryExcludeFunctionMatch: AnalyticsNameFilterFunction = {
            shouldExclude: (name: string): boolean => name === 'baseDataName'
        };

        // when
        analyticsConfiguration.addTelemetryNameFilter(telemetryExcludeFunctionMisMatch);
        analyticsConfiguration.addTelemetryNameFilter(telemetryExcludeFunctionMatch);
        const actualExcluded = telemetryFilterShouldInclude(telemetryItemTestData);

        // then
        expect(actualExcluded).toEqual(false);

        analyticsConfiguration.removeTelemetryNameFilter(telemetryExcludeFunctionMisMatch);
        analyticsConfiguration.removeTelemetryNameFilter(telemetryExcludeFunctionMatch);
    });
});
