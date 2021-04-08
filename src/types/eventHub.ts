export interface EchoEventHub {
    emit<T>(key: string, payload: T): void;
    subscribe<T>(key: string, handler: (payload: T) => void): () => void;
    subscribeMany<T>(keys: Array<string | EchoEvents>, handler: (payload: T) => void): () => void;
}

export enum EchoEvents {
    PlantChanged = 'plantChanged'
}
