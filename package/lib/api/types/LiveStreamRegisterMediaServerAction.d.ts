import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamRegisterMediaServerActionArgs extends KalturaRequestArgs {
    entryId: string;
    hostname: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    applicationName?: string;
    liveEntryStatus?: KalturaEntryServerNodeStatus;
    shouldCreateRecordedEntry?: boolean;
}
/**
 * Build request payload for service 'liveStream' action 'registerMediaServer'.
 *
 * Usage: Register media server to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamRegisterMediaServerAction extends KalturaRequest<KalturaLiveEntry> {
    entryId: string;
    hostname: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    applicationName: string;
    liveEntryStatus: KalturaEntryServerNodeStatus;
    shouldCreateRecordedEntry: boolean;
    constructor(data: LiveStreamRegisterMediaServerActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}