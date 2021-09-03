interface OfflineEvent {
    object: string;
    action: string;
    minutesOffline: number;
    actionsPerformed: string[];
}

class OfflineTracker {
    private actionsPerformed: string[];
    private offlineStart: number;
    private offlineThresholdSeconds: number;
    private offline: boolean;

    constructor(offlineThresholdSeconds: number, offline: boolean) {
        this.offlineThresholdSeconds = offlineThresholdSeconds;
        this.actionsPerformed = [];
        this.offline = offline;
        this.offlineStart = 0;
    }

    setOnline(): OfflineEvent | null {
        this.offline = false;
        const timeOfflineMilliseconds: number = Date.now() - this.offlineStart;
        let offlineEvent: OfflineEvent | null = null;
        if (
            this.offlineStart > 0 &&
            timeOfflineMilliseconds > this.offlineThresholdSeconds * 1000 &&
            this.actionsPerformed.length > 0
        ) {
            const minutesOffline = Number((timeOfflineMilliseconds / 1000 / 60).toFixed(2));
            offlineEvent = {
                object: 'Application',
                action: 'TrackOffline',
                minutesOffline: minutesOffline,
                actionsPerformed: [...new Set(this.actionsPerformed)]
            };
        }
        this.offlineStart = 0;
        this.actionsPerformed = [];
        return offlineEvent;
    }

    setOffline(): void {
        this.offline = true;
        this.offlineStart = Date.now();
    }

    addOfflineAction(action: string): void {
        if (this.offline) {
            this.actionsPerformed.push(action);
        }
    }
}

export default OfflineTracker;
