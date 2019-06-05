import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamUpdateActionArgs extends KalturaRequestArgs {
    entryId: string;
    liveStreamEntry: KalturaLiveStreamEntry;
}
/**
 * Build request payload for service 'liveStream' action 'update'.
 *
 * Usage: Update live stream entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamUpdateAction extends KalturaRequest<KalturaLiveStreamEntry> {
    entryId: string;
    liveStreamEntry: KalturaLiveStreamEntry;
    constructor(data: LiveStreamUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
