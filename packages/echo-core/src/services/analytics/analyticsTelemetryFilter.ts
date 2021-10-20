import { ITelemetryItem } from '@microsoft/applicationinsights-web';
import { AnalyticsNameFilterFunction } from './analyticsTypes';

let isLogToConsoleEnabled = false;
let isLogExcludedToConsoleEnabled = false;
const telemetryLogContext = '[Telemetry]';
const nameFilterFunctions: AnalyticsNameFilterFunction[] = [] as AnalyticsNameFilterFunction[];
export function telemetryFilterShouldInclude(item: ITelemetryItem): boolean {
    const itemBaseDataName = item.baseData ? item.baseData['name'] : undefined;
    const shouldExclude = nameFilterFunctions.find((filter) => {
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
export function addTelemetryNameFilter(nameFilterFunction: AnalyticsNameFilterFunction): void {
    nameFilterFunctions.push(nameFilterFunction);
}

export function removeTelemetryNameFilter(nameFilterFunction: AnalyticsNameFilterFunction): void {
    const index = nameFilterFunctions.indexOf(nameFilterFunction, 0);
    if (index > -1) {
        nameFilterFunctions.splice(index, 1);
    }
}

export function enableLogTelemetryToConsole(isIncludedEnabled: boolean, isExcludedEnabled: boolean): void {
    isLogExcludedToConsoleEnabled = isExcludedEnabled;
    isLogToConsoleEnabled = isIncludedEnabled;
}
