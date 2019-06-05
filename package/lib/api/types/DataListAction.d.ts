import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataListResponse } from './KalturaDataListResponse';
import { KalturaDataEntryFilter } from './KalturaDataEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DataListActionArgs extends KalturaRequestArgs {
    filter?: KalturaDataEntryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'data' action 'list'.
 *
 * Usage: List data entries by filter with paging support
 *
 * Server response type:         KalturaDataListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DataListAction extends KalturaRequest<KalturaDataListResponse> {
    filter: KalturaDataEntryFilter;
    pager: KalturaFilterPager;
    constructor(data?: DataListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}