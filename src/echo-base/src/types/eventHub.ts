export interface EchoEventHub {
    emit<T>(key: string, message: T): void;
    subscribe<T>(key: string, handler: (message: T) => void): () => void;
}

export enum EchoEvents {
    PlantChanged = 'plantChanged'
}
