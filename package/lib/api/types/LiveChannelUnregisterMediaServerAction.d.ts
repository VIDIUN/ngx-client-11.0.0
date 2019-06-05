import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelUnregisterMediaServerActionArgs extends KalturaRequestArgs {
    entryId: string;
    hostname: string;
    mediaServerIndex: KalturaEntryServerNodeType;
}
/**
 * Build request payload for service 'liveChannel' action 'unregisterMediaServer'.
 *
 * Usage: Unregister media server from live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelUnregisterMediaServerAction extends KalturaRequest<KalturaLiveEntry> {
    entryId: string;
    hostname: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    constructor(data: LiveChannelUnregisterMediaServerActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
