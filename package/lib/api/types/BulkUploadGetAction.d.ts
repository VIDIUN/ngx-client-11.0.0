import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BulkUploadGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'bulkUpload' action 'get'.
 *
 * Usage: Get bulk upload batch job by id
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class BulkUploadGetAction extends KalturaRequest<KalturaBulkUpload> {
    id: number;
    constructor(data: BulkUploadGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
