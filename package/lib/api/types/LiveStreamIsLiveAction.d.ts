import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamIsLiveActionArgs extends KalturaRequestArgs {
    id: string;
    protocol: KalturaPlaybackProtocol;
}
/**
 * Build request payload for service 'liveStream' action 'isLive'.
 *
 * Usage: Delivering the status of a live stream (on-air/offline) if it is possible
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamIsLiveAction extends KalturaRequest<boolean> {
    id: string;
    protocol: KalturaPlaybackProtocol;
    constructor(data: LiveStreamIsLiveActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
