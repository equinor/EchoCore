import { ITelemetryItem } from '@microsoft/applicationinsights-web';
import { AnalyticsNameFilterFunction } from './analyticsTypes';

let isLogToConsoleEnabled = false;
let isLogExcludedToConsoleEnabled = false;
const telemetryLogContext = '[Telemetry]';
export function telemetryFilterShouldInclude(item: ITelemetryItem): boolean | void {
    const itemBaseDataName = item.baseData ? item.baseData['name'] : undefined;
    const shouldExclude = nameFilters.find((filter) => {
        if (itemBaseDataName && filter.shouldExclude(itemBaseDataName)) {
            return true;
        }
    });

    if (shouldExclude) {
        isLogExcludedToConsoleEnabled && console.log(telemetryLogContext, 'excluding ', itemBaseDataName, item);
        return false;
    }

    isLogToConsoleEnabled && console.log(telemetryLogContext, 'including', itemBaseDataName, item);
    return true;
}


const nameFilters: AnalyticsNameFilterFunction[] = [] as AnalyticsNameFilterFunction[];

/**
 * Add a shouldExclude function callback, 
 * and exclude if it returns true for the specific telemetryName
 * @example
 * ```
 * analyticsConfiguration.addTelemetryNameFilter({
 *     shouldExclude: (name: string) => {
 *         const shouldExcludeItemFromAnalytics = name === 'Echo | Search';
 *         //console.log('exclude function called', name);
 *         return shouldExcludeItemFromAnalytics;
 *     }
 * });
 * ```
 */
export function addTelemetryNameFilter(nameFilterFunc: AnalyticsNameFilterFunction): void {
    nameFilters.push(nameFilterFunc);
}

export function removeTelemetryNameFilter(nameFilterFunc: AnalyticsNameFilterFunction): void {
    const index = nameFilters.indexOf(nameFilterFunc, 0);
    if (index > -1) {
        nameFilters.splice(index, 1);
    }
}

export function enableLogTelemetryToConsole(isIncludedEnabled: boolean, isExcludedEnabled: boolean): void {
    isLogExcludedToConsoleEnabled = isExcludedEnabled;
    isLogToConsoleEnabled = isIncludedEnabled;
}
