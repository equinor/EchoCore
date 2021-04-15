export function createOfflineMessage(subMsg?: string): string {
    return subMsg ? `You need to go online to ${subMsg}` : 'You need to go online to view this content';
}

export function createNoPdfFileMessage(docNo: string, docTitle: string | undefined): string {
    return docNo && docTitle ? `No pdf file exist for ${docNo} ${docTitle}` : 'No pdf file exist for this document';
}
