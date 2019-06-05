import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface BulkUploadServeLogActionArgs extends KalturaFileRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'bulkUpload' action 'serveLog'.
 *
 * Usage: serveLog action returan the original file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class BulkUploadServeLogAction extends KalturaFileRequest {
    id: number;
    constructor(data: BulkUploadServeLogActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
