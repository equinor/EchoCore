import { ITelemetryItem } from '@microsoft/applicationinsights-core-js';
import { analyticsConfiguration } from './analytics';
import { telemetryFilterShouldInclude } from './analyticsTelemetryFilter';
import { AnalyticsNameFilterFunction } from './analyticsTypes';

const telemetryItem: ITelemetryItem = { name: 'name', baseData: { name: 'baseDataName' } };

describe('telemetryFilterShouldInclude & addTelemetryNameFilter', () => {
    it(`no filters should not exclude`, () => {
        const actual = telemetryFilterShouldInclude(telemetryItem);
        expect(actual).toEqual(true);
    });

    it(`after add filter it should exclude, and after remove filter it shouldn't exclude`, () => {
        const telemetryExcludeFunctionMatch: AnalyticsNameFilterFunction = {
            shouldExclude: (name: string): boolean => name === 'baseDataName'
        };
        analyticsConfiguration.addTelemetryNameFilter(telemetryExcludeFunctionMatch);
        const actualExcluded = telemetryFilterShouldInclude(telemetryItem);
        expect(actualExcluded).toEqual(false);

        analyticsConfiguration.removeTelemetryNameFilter(telemetryExcludeFunctionMatch);
        const actualIncluded = telemetryFilterShouldInclude(telemetryItem);
        expect(actualIncluded).toEqual(true);
    });

    it(`should not exclude if filter has mismatch on baseData.name`, () => {
        const telemetryExcludeFunctionMisMatch: AnalyticsNameFilterFunction = {
            shouldExclude: (name: string): boolean => name === 'mismatchOnName'
        };
        analyticsConfiguration.addTelemetryNameFilter(telemetryExcludeFunctionMisMatch);
        const actualIncluded = telemetryFilterShouldInclude(telemetryItem);
        expect(actualIncluded).toEqual(true);

        analyticsConfiguration.removeTelemetryNameFilter(telemetryExcludeFunctionMisMatch);
    });

    it(`multiple filters should exclude if 1 filter is matching baseData.name`, () => {
        const telemetryExcludeFunctionMisMatch: AnalyticsNameFilterFunction = {
            shouldExclude: (name: string): boolean => name === 'mismatchOnName'
        };

        const telemetryExcludeFunctionMatch: AnalyticsNameFilterFunction = {
            shouldExclude: (name: string): boolean => name === 'baseDataName'
        };
        analyticsConfiguration.addTelemetryNameFilter(telemetryExcludeFunctionMisMatch);
        analyticsConfiguration.addTelemetryNameFilter(telemetryExcludeFunctionMatch);
        const actualExcluded = telemetryFilterShouldInclude(telemetryItem);
        expect(actualExcluded).toEqual(false);

        analyticsConfiguration.removeTelemetryNameFilter(telemetryExcludeFunctionMisMatch);
        analyticsConfiguration.removeTelemetryNameFilter(telemetryExcludeFunctionMatch);
    });
});
