import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchResultResponse } from './KalturaSearchResultResponse';
import { KalturaSearch } from './KalturaSearch';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SearchSearchActionArgs extends KalturaRequestArgs {
    search: KalturaSearch;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'search' action 'search'.
 *
 * Usage: Search for media in one of the supported media providers
 *
 * Server response type:         KalturaSearchResultResponse
 * Server failure response type: KalturaAPIException
 */
export declare class SearchSearchAction extends KalturaRequest<KalturaSearchResultResponse> {
    search: KalturaSearch;
    pager: KalturaFilterPager;
    constructor(data: SearchSearchActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}