export interface RequestTagDetails {
    instCode: string;
    tagNo: string;
}

export interface Project {
    instCode: string;
    projectCode: string;
    description: string;
    stidDeliveryCode: string;
    insertedDate?: Date;
    isPrimary: boolean;
    isValid: boolean;
}

export type AlphaNumTag = string;

export enum TagStatus {
    UNKNOWN = 'Unknown',
    //Stid statuses
    AsBuilt = 'AsBuilt',
    Planned = 'Planned',
    Reserved = 'Reserved',
    Future = 'Future',
    Historic = 'Historic',
    OutOfService = 'OutOfService',
    Voided = 'Voided',
    //Procosys statuses
    OK = 'OK',
    OS = 'OS',
    PA = 'PA',
    PB = 'PB'
}

export interface TagDetails {
    instCode: string;
    instCodeDescription: string;
    tagNo: AlphaNumTag;
    description: string;
    tagCategory: number;
    tagCategoryDescription: string;
    tagType: string;
    tagTypeDescription: string;
    tagStatus: string; //This is not tagStatus in Tag, but 1 letter: A, P, etc
    tagStatusDescription: TagStatus; //this is the same as tagStatus in Tag.
    projectCode: string;
    projectCodeDescription: string;
    contrCode: string;
    contrCodeDescription: string;
    disciplineCode: string;
    disciplineCodeDescription: string;
    locationCode: string;
    locationCodeDescription: string;
    system: string;
    systemDescription: string;
    subSystem: string;
    subSystemDescription: string;
    mainSystem: string;
    mainSystemDescription: string;
    distrSystem: string;
    dateInstalled: Date;
    dateStartOperation?: Date;
    remark: string;
    poNo: string;
    poNoDescription: string;
    sequence: string;
    exCode: string;
    exCodeDescription: string;
    gasGroup: string;
    gasGroupDescription: string;
    tempClass: string;
    tempClassDescription: string;
    ipGrade: string;
    ipGradeDescription: string;
    fireArea: string;
    fireAreaDescription: string;
    operWeight: number;
    serialNo: string;
    safetyIntegrityLevel: number;
    safetyIntegrityLevelDesc: string;
    isFieldEquip: boolean;
    isFunction: boolean;
    isLiftingEq: boolean;
    isSignal: boolean;
    superiorTag: string;
    superiorTagDescription: string;
    tagMountedOn: string;
    productCode: string;
    productCodeDescription: string;
    productColour: string;
    nomDiam: string;
    nomDiamUnit: string;
    pipingClass: string;
    pipingClassDescription: string;
    insulationClass: string;
    insulationClassDescription: string;
    valveDatash: string;
    valveDatashDescription: string;
    isNonisCode: string;
    isNonisCodeDescription: string;
    supplyCode: string;
    supplyCodeDescription: string;
    calibratedRangeFrom: string;
    calibratedRangeTo: string;
    calibratedRangeUnit: string;
    scaledRangeFrom: string;
    scaledRangeTo: string;
    scaledRangeUnit: string;
    setpointLl: string;
    setpointL: string;
    setpointH: string;
    setpointHh: string;
    setpointPrj: string;
    setpointUnit: string;
    backPressure: number;
    coldSetPressure: number;
    reqHeatTraceTemp: number;
    safetyLevel: string;
    safetyLevelDescription: string;
    signalLevel: string;
    signalType: string;
    signalTypeDescription: string;
    instanceNo: string;
    functionBlock: string;
    fpdsSignalCode: string;
    signalTypeDirection: string;
    load: number;
    frequency: string;
    telecomIdNo: number;
    operPress: number;
    designPress: number;
    designPressMin: number;
    operTempMin: number;
    operTempMax: number;
    designTempMin: number;
    designTempMax: number;
    testPress: number;
    testMedium: string;
    testMediumDescription: string;
    flowPress: number;
    flowTemp: number;
    insulatThick: number;
    chemClnFlg: string;
    critLineFlg: string;
    massFlow: number;
    densityV: number;
    densityL: number;
    liquidFract: number;
    rhov2: number;
    compFact: number;
    viscosityV: number;
    viscosityL: number;
    velocity: number;
    calcMeth: string;
    calcLength: number;
    barLossCalc: number;
    barLossAllw: number;
    ndtClass: string;
    ndtClassDescription: string;
    ductFunctionCode: string;
    ductFunctionCodeDescription: string;
    kpValueFrom: number;
    kpValueTo: number;
    cableStatus: string;
    cableStatusDescription: string;
    cableStatusDate?: Date;
    cableStatusBy: string;
    cableType: string;
    cableTypeDescription: string;
    cableCode: string;
    cableVoltage: string;
    nbrGroups: number;
    nbrWires: number;
    crossSectionSize: string;
    crossSectionUnit: string;
    grndFlg: string;
    sheathColour: string;
    sheathColourDescription: string;
    segrLevel: number;
    segrLevelDescription: string;
    cableLengthEst: number;
    cableLengthInst: number;
    braidXSect: number;
    cableSpecification: string;
    thermodynCondmon: string;
    contVibrMeas: string;
    valvePosition: string;
    valvePositionDescription: string;
    valveSize: string;
    valveSizeUnit: string;
    rating: string;
    ratingDescription: string;
    mapping: string;
    htrcTypeCode: string;
    htrcTypeCodeDescription: string;
    estLen: number;
    instLen: number;
    splaisFlg: string;
    splaisComment: string;
    endSealFlg: string;
    l1Flg: string;
    l2Flg: string;
    l3Flg: string;
    nFlg: string;
    instDate?: Date;
    instCodeHeatTraceFrom: string;
    tagNoHeatTraceFrom: string;
    instCodeHeatTraceTo: string;
    tagNoHeatTraceTo: string;
    fromText: string;
    toText: string;
    nodeIdentifier: string;
    hwTypical: string;
    hwTypicalDescription: string;
    processCtrUnit: string;
    ctrSymbol: string;
    instCodeNodeFrom: string;
    nodeFrom: string;
    instCodeNodeTo: string;
    nodeTo: string;
    instCodeCoiledNodeFrom: string;
    coiledNodeFrom: string;
    instCodeCoiledNodeTo: string;
    coiledNodeTo: string;
    constructionContractor: string;
    contractorInstDescription: string;
    designContractor: string;
    designContractorDescription: string;
    priority: string;
    priorityDescription: string;
    site: string;
    siteDescription: string;
    fieldRouteFlg: string;
    tareLengthFrom: number;
    tareLengthTo: number;
    cableSpecOuterDiameter: number;
    cableSpecWeight: number;
    cableSpecBlockDepth: number;
    cableSpecBlockWidth: number;
    dateRouted?: Date;
    dateReleased?: Date;
    datePulled?: Date;
    dateTermFrom?: Date;
    dateTermTo?: Date;
    dateTested?: Date;
    dateApproved?: Date;
    dateSpare?: Date;
    plantNo: string;
    plantId: string;
    plantIdDescription: string;
    pedCategory: string;
    pedCategoryDescription: string;
    penetrationLocation: string;
    penetrationLocationDesc: string;
    fireRating: string;
    fireRatingDescription: string;
    blastRating: string;
    blastRatingDescription: string;
    inletConnection: string;
    inletConnectionDescription: string;
    outletConnection: string;
    outletConnectionDescription: string;
    wirelessFlg: string;
    temperatureUnit: string;
    pressureUnit: string;
    eleNetSeqNo: number;
    tagFromRefCount: number;
    tagToRefCount: number;
    tagHeatRefCount: number;
    tagHeatingRefCount: number;
    tagRefCount: number;
    docRefCount: number;
    echoUrl?: string; //example: echo://tag/?tag=A-73MA001&plant=JSA
    hasEleDistributionBoardReport: boolean;
    hasEleHeatTrace: boolean;
    eleHeatTraceButtonText?: string;
    additionalFields: AdditionalField[];
    projects: Project[];
    purchaseOrders: PurchaseOrder[];
    apiResponseTime: string;
    loopDetails: LoopDetails;
    xCoordinate?: number;
    yCoordinate?: number;
    zCoordinate?: number;
}

export interface LoopDetails {
    loopType: string;
    hasLoopDrawing: boolean;
    loopRelativeUrl: string;
    projectLoop: string;
    hasProjectLoopDrawing: boolean;
    projectLoopRelativeUrl: string;
}

export interface PurchaseOrder {
    instCode: string;
    poNo: string;
    description: string;
    insertedDate?: Date;
    isPrimary: boolean;
    isValid: boolean;
}

export interface AdditionalField {
    type: string;
    typeDescription: string;
    value: string;
    description: string;
}
