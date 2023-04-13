export interface TelcoData {
    "cellName": String[],
    "siteName": String[],
    "servingCellIdentity": Number[]
}

export interface TelcoPropObject {
    name: string,
    confidence: number
}

export interface TelcoRawObject {
    [key: string]: { state: boolean, confidence: number }
}