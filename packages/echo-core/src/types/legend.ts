export interface LegendOptions {
    isActive: boolean;
    selectedLegendType: string;
}

export enum LegendStatus {
    Unknown = 'Unknown',
    //Stid statuses
    AsBuilt = 'AsBuilt',
    Planned = 'Planned',
    Reserved = 'Reserved',
    Future = 'Future',
    Historic = 'Historic',
    OutOfService = 'Out Of Service',
    Voided = 'Voided',
    //Procosys statuses
    OK = 'OK',
    OS = 'OS',
    PA = 'PA',
    PB = 'PB',
    // CommPk statuses
    RFCCSent = 'RFCCSent',
    RFCCPartly = 'RFCCPartly',
    RFCC = 'RFCC',
    RFOCSent = 'RFOCSent',
    RFOCPartly = 'RFOCPartly',
    RFOC = 'RFOC',
    RFCCRejected = 'RFCCRejected',
    RFOCRejected = 'RFOCRejected',
    Error = 'Error',
    // WO statuses
    PM01 = 'pm01',
    PM02 = 'pm02',
    PM03 = 'pm03',
    PM04 = 'pm04',
    PM05 = 'pm05',
    PM06 = 'pm06',
    PM010 = 'pm010',
    PM015 = 'pm015',
    PM020 = 'pm020'
}
