import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BulkUploadAbortActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'bulkUpload' action 'abort'.
 *
 * Usage: Aborts the bulk upload and all its child jobs
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class BulkUploadAbortAction extends KalturaRequest<KalturaBulkUpload> {
    id: number;
    constructor(data: BulkUploadAbortActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
