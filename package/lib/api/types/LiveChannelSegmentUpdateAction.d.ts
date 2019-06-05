import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelSegment } from './KalturaLiveChannelSegment';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelSegmentUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    liveChannelSegment: KalturaLiveChannelSegment;
}
/**
 * Build request payload for service 'liveChannelSegment' action 'update'.
 *
 * Usage: Update live channel segment by id
 *
 * Server response type:         KalturaLiveChannelSegment
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelSegmentUpdateAction extends KalturaRequest<KalturaLiveChannelSegment> {
    id: number;
    liveChannelSegment: KalturaLiveChannelSegment;
    constructor(data: LiveChannelSegmentUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}