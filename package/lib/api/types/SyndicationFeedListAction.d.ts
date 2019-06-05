import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedListResponse } from './KalturaBaseSyndicationFeedListResponse';
import { KalturaBaseSyndicationFeedFilter } from './KalturaBaseSyndicationFeedFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SyndicationFeedListActionArgs extends KalturaRequestArgs {
    filter?: KalturaBaseSyndicationFeedFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'syndicationFeed' action 'list'.
 *
 * Usage: List Syndication Feeds by filter with paging support
 *
 * Server response type:         KalturaBaseSyndicationFeedListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class SyndicationFeedListAction extends KalturaRequest<KalturaBaseSyndicationFeedListResponse> {
    filter: KalturaBaseSyndicationFeedFilter;
    pager: KalturaFilterPager;
    constructor(data?: SyndicationFeedListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}