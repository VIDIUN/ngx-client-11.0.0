import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannel } from './KalturaLiveChannel';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    liveChannel: KalturaLiveChannel;
}
/**
 * Build request payload for service 'liveChannel' action 'update'.
 *
 * Usage: Update live channel. Only the properties that were set will be updated
 *
 * Server response type:         KalturaLiveChannel
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelUpdateAction extends KalturaRequest<KalturaLiveChannel> {
    id: string;
    liveChannel: KalturaLiveChannel;
    constructor(data: LiveChannelUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}