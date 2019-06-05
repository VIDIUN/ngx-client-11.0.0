import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaListResponse } from './KalturaMediaListResponse';
import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaListActionArgs extends KalturaRequestArgs {
    filter?: KalturaMediaEntryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'media' action 'list'.
 *
 * Usage: List media entries by filter with paging support
 *
 * Server response type:         KalturaMediaListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class MediaListAction extends KalturaRequest<KalturaMediaListResponse> {
    filter: KalturaMediaEntryFilter;
    pager: KalturaFilterPager;
    constructor(data?: MediaListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
