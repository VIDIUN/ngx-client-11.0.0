import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelSegmentDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'liveChannelSegment' action 'delete'.
 *
 * Usage: Delete live channel segment by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelSegmentDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: LiveChannelSegmentDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
