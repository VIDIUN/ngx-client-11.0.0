import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface ReportGetCsvActionArgs extends KalturaFileRequestArgs {
    id: number;
    params?: KalturaKeyValue[];
}
/**
 * Build request payload for service 'report' action 'getCsv'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class ReportGetCsvAction extends KalturaFileRequest {
    id: number;
    params: KalturaKeyValue[];
    constructor(data: ReportGetCsvActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}