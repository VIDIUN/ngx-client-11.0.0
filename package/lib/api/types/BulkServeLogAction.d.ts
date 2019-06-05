import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface BulkServeLogActionArgs extends KalturaFileRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'bulk' action 'serveLog'.
 *
 * Usage: serveLog action returns the log file for the bulk-upload job
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class BulkServeLogAction extends KalturaFileRequest {
    id: number;
    constructor(data: BulkServeLogActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}