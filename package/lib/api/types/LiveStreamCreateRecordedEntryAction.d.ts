import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamCreateRecordedEntryActionArgs extends KalturaRequestArgs {
    entryId: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    liveEntryStatus: KalturaEntryServerNodeStatus;
}
/**
 * Build request payload for service 'liveStream' action 'createRecordedEntry'.
 *
 * Usage: Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamCreateRecordedEntryAction extends KalturaRequest<KalturaLiveEntry> {
    entryId: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    liveEntryStatus: KalturaEntryServerNodeStatus;
    constructor(data: LiveStreamCreateRecordedEntryActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}