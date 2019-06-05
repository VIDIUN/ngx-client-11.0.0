import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadListResponse } from './KalturaBulkUploadListResponse';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BulkUploadListActionArgs extends KalturaRequestArgs {
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'bulkUpload' action 'list'.
 *
 * Usage: List bulk upload batch jobs
 *
 * Server response type:         KalturaBulkUploadListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class BulkUploadListAction extends KalturaRequest<KalturaBulkUploadListResponse> {
    pager: KalturaFilterPager;
    constructor(data?: BulkUploadListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
