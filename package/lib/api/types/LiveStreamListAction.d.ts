import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamListResponse } from './KalturaLiveStreamListResponse';
import { KalturaLiveStreamEntryFilter } from './KalturaLiveStreamEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamListActionArgs extends KalturaRequestArgs {
    filter?: KalturaLiveStreamEntryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'liveStream' action 'list'.
 *
 * Usage: List live stream entries by filter with paging support
 *
 * Server response type:         KalturaLiveStreamListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamListAction extends KalturaRequest<KalturaLiveStreamListResponse> {
    filter: KalturaLiveStreamEntryFilter;
    pager: KalturaFilterPager;
    constructor(data?: LiveStreamListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
