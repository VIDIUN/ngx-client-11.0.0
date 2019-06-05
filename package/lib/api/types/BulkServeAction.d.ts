import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface BulkServeActionArgs extends KalturaFileRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'bulk' action 'serve'.
 *
 * Usage: serve action returns the original file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class BulkServeAction extends KalturaFileRequest {
    id: number;
    constructor(data: BulkServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
