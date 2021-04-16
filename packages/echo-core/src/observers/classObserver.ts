export type ObserverIdentifier = number;
export interface ObserverInterface {
    id: ObserverIdentifier;
    callback: Function;
    type: string;
}
class ClassObserver {
    private id: ObserverIdentifier;
    private observers: ObserverInterface[];

    constructor() {
        this.id = 0;
        this.observers = [];
    }

    addSubscriber(callback: Function, type: string): ObserverIdentifier {
        this.id++;
        const functionCallback = { id: this.id, callback, type };
        this.observers.push(functionCallback);
        return this.id;
    }

    removeSubscriber(id: ObserverIdentifier): void {
        this.observers = this.observers.filter((item) => item.id !== id);
    }

    notify<T>(data: T, type: string): void {
        this.observers.forEach((observer) => {
            if (observer.type === type) {
                observer.callback(data);
            }
        });
    }
}

export default new ClassObserver();

export const ObserverClass = ClassObserver;
