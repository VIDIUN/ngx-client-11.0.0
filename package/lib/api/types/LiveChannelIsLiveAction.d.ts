import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelIsLiveActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'liveChannel' action 'isLive'.
 *
 * Usage: Delivering the status of a live channel (on-air/offline)
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelIsLiveAction extends KalturaRequest<boolean> {
    id: string;
    constructor(data: LiveChannelIsLiveActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}