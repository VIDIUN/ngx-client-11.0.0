import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelSegmentGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'liveChannelSegment' action 'get'.
 *
 * Usage: Get live channel segment by id
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelSegmentGetAction extends KalturaRequest<KalturaLiveChannelSegment> {
    id: number;
    constructor(data: LiveChannelSegmentGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}