import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelListResponse } from './KalturaLiveChannelListResponse';
import { KalturaLiveChannelFilter } from './KalturaLiveChannelFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelListActionArgs extends KalturaRequestArgs {
    filter?: KalturaLiveChannelFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'liveChannel' action 'list'.
 *
 * Usage: List live channels by filter with paging support
 *
 * Server response type:         KalturaLiveChannelListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelListAction extends KalturaRequest<KalturaLiveChannelListResponse> {
    filter: KalturaLiveChannelFilter;
    pager: KalturaFilterPager;
    constructor(data?: LiveChannelListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
