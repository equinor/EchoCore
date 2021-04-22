export interface TextAtLocation {
    text: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ReactNativeWebView: any;
        appPortsFromNativeSend({ payload }: { payload: TextAtLocation[] }): void;
    }
}

export function SendMessageToReactNative(message: { messageType: string; messageValue: boolean | unknown[] }): void {
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify(message));
}
