import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelDeleteActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'liveChannel' action 'delete'.
 *
 * Usage: Delete a live channel
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelDeleteAction extends KalturaRequest<void> {
    id: string;
    constructor(data: LiveChannelDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
