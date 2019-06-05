import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BulkGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'bulk' action 'get'.
 *
 * Usage: Get bulk upload batch job by id
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class BulkGetAction extends KalturaRequest<KalturaBulkUpload> {
    id: number;
    constructor(data: BulkGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
