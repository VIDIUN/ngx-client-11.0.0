import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface ReportGetCsvFromStringParamsActionArgs extends KalturaFileRequestArgs {
    id: number;
    params?: string;
}
/**
 * Build request payload for service 'report' action 'getCsvFromStringParams'.
 *
 * Usage: Returns report CSV file executed by string params with the following convention: param1=value1;param2=value2
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class ReportGetCsvFromStringParamsAction extends KalturaFileRequest {
    id: number;
    params: string;
    constructor(data: ReportGetCsvFromStringParamsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
