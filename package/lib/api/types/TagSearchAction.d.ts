import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTagListResponse } from './KalturaTagListResponse';
import { KalturaTagFilter } from './KalturaTagFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface TagSearchActionArgs extends KalturaRequestArgs {
    tagFilter: KalturaTagFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'tag' action 'search'.
 *
 *
 *
 * Server response type:         KalturaTagListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class TagSearchAction extends KalturaRequest<KalturaTagListResponse> {
    tagFilter: KalturaTagFilter;
    pager: KalturaFilterPager;
    constructor(data: TagSearchActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}