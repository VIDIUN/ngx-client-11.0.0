import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegmentListResponse } from './KalturaLiveChannelSegmentListResponse';
import { KalturaLiveChannelSegmentFilter } from './KalturaLiveChannelSegmentFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelSegmentListActionArgs extends KalturaRequestArgs {
    filter?: KalturaLiveChannelSegmentFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'liveChannelSegment' action 'list'.
 *
 * Usage: List live channel segments by filter and pager
 *
 * Server response type:         KalturaLiveChannelSegmentListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelSegmentListAction extends KalturaRequest<KalturaLiveChannelSegmentListResponse> {
    filter: KalturaLiveChannelSegmentFilter;
    pager: KalturaFilterPager;
    constructor(data?: LiveChannelSegmentListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
