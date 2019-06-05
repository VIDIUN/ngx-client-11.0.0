import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamUnregisterMediaServerActionArgs extends KalturaRequestArgs {
    entryId: string;
    hostname: string;
    mediaServerIndex: KalturaEntryServerNodeType;
}
/**
 * Build request payload for service 'liveStream' action 'unregisterMediaServer'.
 *
 * Usage: Unregister media server from live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamUnregisterMediaServerAction extends KalturaRequest<KalturaLiveEntry> {
    entryId: string;
    hostname: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    constructor(data: LiveStreamUnregisterMediaServerActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}