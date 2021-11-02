import { ITelemetryItem } from '.';
import { AnalyticsNameFilterFunction } from './analyticsTypes';

let isLogToConsoleEnabled = false;
let isLogExcludedToConsoleEnabled = false;
const telemetryLogContext = '[Telemetry]';
const nameFilterFunctions: AnalyticsNameFilterFunction[] = [] as AnalyticsNameFilterFunction[];
export function telemetryFilterShouldInclude(telemetryItem: ITelemetryItem): boolean {
    const itemBaseDataName = telemetryItem.baseData ? telemetryItem.baseData['name'] : undefined;
    const shouldExclude = nameFilterFunctions.find((filter) => {
        if (itemBaseDataName && filter.shouldExclude(itemBaseDataName, telemetryItem)) {
            return true;
        }
    });

    if (shouldExclude) {
        isLogExcludedToConsoleEnabled &&
            console.log(telemetryLogContext, 'excluding ', itemBaseDataName, telemetryItem);
        return false;
    }

    isLogToConsoleEnabled && console.log(telemetryLogContext, 'including', itemBaseDataName, telemetryItem);
    return true;
}

/**
 * Add a shouldExclude function callback,
 * and exclude if it returns true for the specific telemetryName
 * @example
 * ```
 * analyticsConfiguration.addTelemetryNameFilter({
 *   shouldExclude: (name: string, telemetryItem: ITelemetryItem) => {
 *       const isEchoSearch = name === 'Echo | Search';
 *       const uri: string = ((telemetryItem?.baseData ?? {})['uri'] as string) ?? '';
 *       const shouldExcludeItemFromAnalytics = isEchoSearch && uri.includes('/echo3d');
 *       return shouldExcludeItemFromAnalytics;
 *   }
});
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

/**
 * A helper function for turning on logging to console, useful for debugging. Should only be used
 * locally and not in production.
 */
export function enableLogTelemetryToConsole(isIncludedEnabled: boolean, isExcludedEnabled: boolean): void {
    isLogExcludedToConsoleEnabled = isExcludedEnabled;
    isLogToConsoleEnabled = isIncludedEnabled;
}
