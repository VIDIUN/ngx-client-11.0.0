import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface BulkUploadServeActionArgs extends KalturaFileRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'bulkUpload' action 'serve'.
 *
 * Usage: serve action returan the original file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class BulkUploadServeAction extends KalturaFileRequest {
    id: number;
    constructor(data: BulkUploadServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
