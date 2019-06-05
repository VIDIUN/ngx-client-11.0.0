import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadListResponse } from './KalturaBulkUploadListResponse';
import { KalturaBulkUploadFilter } from './KalturaBulkUploadFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BulkListActionArgs extends KalturaRequestArgs {
    bulkUploadFilter?: KalturaBulkUploadFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'bulk' action 'list'.
 *
 * Usage: List bulk upload batch jobs
 *
 * Server response type:         KalturaBulkUploadListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class BulkListAction extends KalturaRequest<KalturaBulkUploadListResponse> {
    bulkUploadFilter: KalturaBulkUploadFilter;
    pager: KalturaFilterPager;
    constructor(data?: BulkListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
