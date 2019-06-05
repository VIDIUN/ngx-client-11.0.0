import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryListResponse } from './KalturaBaseEntryListResponse';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryListActionArgs extends KalturaRequestArgs {
    filter?: KalturaBaseEntryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'baseEntry' action 'list'.
 *
 * Usage: List base entries by filter with paging support
 *
 * Server response type:         KalturaBaseEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryListAction extends KalturaRequest<KalturaBaseEntryListResponse> {
    filter: KalturaBaseEntryFilter;
    pager: KalturaFilterPager;
    constructor(data?: BaseEntryListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}