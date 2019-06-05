export declare class KalturaClientException extends Error {
    code: string;
    message: string;
    args: any;
    constructor(code: string, message: string, args?: any);
}