import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannel } from './KalturaLiveChannel';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'liveChannel' action 'get'.
 *
 * Usage: Get live channel by ID
 *
 * Server response type:         KalturaLiveChannel
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelGetAction extends KalturaRequest<KalturaLiveChannel> {
    id: string;
    constructor(data: LiveChannelGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}