import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelSegmentAddActionArgs extends KalturaRequestArgs {
    liveChannelSegment: KalturaLiveChannelSegment;
}
/**
 * Build request payload for service 'liveChannelSegment' action 'add'.
 *
 * Usage: Add new live channel segment
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelSegmentAddAction extends KalturaRequest<KalturaLiveChannelSegment> {
    liveChannelSegment: KalturaLiveChannelSegment;
    constructor(data: LiveChannelSegmentAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}