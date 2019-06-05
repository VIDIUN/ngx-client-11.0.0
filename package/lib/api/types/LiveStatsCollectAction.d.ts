import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStatsEvent } from './KalturaLiveStatsEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStatsCollectActionArgs extends KalturaRequestArgs {
    event: KalturaLiveStatsEvent;
}
/**
 * Build request payload for service 'liveStats' action 'collect'.
 *
 * Usage: Will write to the event log a single line representing the event
 * KalturaStatsEvent $event
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStatsCollectAction extends KalturaRequest<boolean> {
    event: KalturaLiveStatsEvent;
    constructor(data: LiveStatsCollectActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}