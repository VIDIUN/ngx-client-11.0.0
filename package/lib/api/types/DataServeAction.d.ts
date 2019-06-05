import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface DataServeActionArgs extends KalturaFileRequestArgs {
    entryId: string;
    version?: number;
    forceProxy?: boolean;
}
/**
 * Build request payload for service 'data' action 'serve'.
 *
 * Usage: serve action returan the file from dataContent field
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class DataServeAction extends KalturaFileRequest {
    entryId: string;
    version: number;
    forceProxy: boolean;
    constructor(data: DataServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
