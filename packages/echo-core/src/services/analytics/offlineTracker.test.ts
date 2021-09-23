import OfflineTracker from './offlineTracker';

describe('offlineTracker', () => {
    it('should not return event due to no offline duration', () => {
        const offlineThresholdSeconds = 10 / 1000; //10 milliseconds
        const tracker = new OfflineTracker(offlineThresholdSeconds, false);
        tracker.setOffline();
        tracker.addOfflineAction('Clicked around');
        const evt = tracker.setOnline();
        expect(evt).toBeNull();
    });

    it('should not return event due to no offline actions', async () => {
        const offlineThresholdSeconds = 10 / 1000; //10 milliseconds
        const tracker = new OfflineTracker(offlineThresholdSeconds, false);
        const timeoutMilliseconds = 20;
        tracker.setOffline();
        await new Promise((r) => setTimeout(r, timeoutMilliseconds));
        const evt = tracker.setOnline();
        expect(evt).toBeNull();
    });

    it('should not return event due to short offline duration', async () => {
        const offlineThresholdSeconds = 20 / 1000; //20 milliseconds
        const tracker = new OfflineTracker(offlineThresholdSeconds, false);
        const timeoutMilliseconds = 10;
        tracker.setOffline();
        tracker.addOfflineAction('Clicked around');
        await new Promise((r) => setTimeout(r, timeoutMilliseconds));
        const evt = tracker.setOnline();
        expect(evt).toBeNull();
    });

    it('should return event', async () => {
        const offlineThresholdSeconds = 10 / 1000; //10 milliseconds
        const tracker = new OfflineTracker(offlineThresholdSeconds, false);
        const timeoutMilliseconds = 20;
        tracker.setOffline();
        tracker.addOfflineAction('Clicked around');
        await new Promise((r) => setTimeout(r, timeoutMilliseconds));
        const evt = tracker.setOnline();
        expect(evt).not.toBeNull();
    });

    it('should return event with correct values', async () => {
        const offlineThresholdSeconds = 10 / 1000; //10 milliseconds
        const tracker = new OfflineTracker(offlineThresholdSeconds, false);
        const timeoutMilliseconds = 20;
        const expectedMinutesOffline = Number((timeoutMilliseconds / 1000 / 60).toFixed(2));
        tracker.setOffline();
        tracker.addOfflineAction('Clicked around');
        tracker.addOfflineAction('Clicked link');
        tracker.addOfflineAction('Clicked link');
        await new Promise((r) => setTimeout(r, timeoutMilliseconds));
        const evt = tracker.setOnline();
        expect(evt?.object).toEqual('Application');
        expect(evt?.action).toEqual('TrackOffline');
        expect(evt?.minutesOffline).toBeGreaterThanOrEqual(expectedMinutesOffline);
        expect(evt?.actionsPerformed.length).toEqual(2);
        expect(evt?.actionsPerformed).toContain('Clicked around');
        expect(evt?.actionsPerformed).toContain('Clicked link');
    });
});
