import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannel } from './KalturaLiveChannel';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelAddActionArgs extends KalturaRequestArgs {
    liveChannel: KalturaLiveChannel;
}
/**
 * Build request payload for service 'liveChannel' action 'add'.
 *
 * Usage: Adds new live channel
 *
 * Server response type:         KalturaLiveChannel
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelAddAction extends KalturaRequest<KalturaLiveChannel> {
    liveChannel: KalturaLiveChannel;
    constructor(data: LiveChannelAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}