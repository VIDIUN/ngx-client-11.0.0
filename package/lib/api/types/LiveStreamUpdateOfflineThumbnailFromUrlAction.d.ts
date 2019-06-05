import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamUpdateOfflineThumbnailFromUrlActionArgs extends KalturaRequestArgs {
    entryId: string;
    url: string;
}
/**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailFromUrl'.
 *
 * Usage: Update entry thumbnail using url
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamUpdateOfflineThumbnailFromUrlAction extends KalturaRequest<KalturaLiveStreamEntry> {
    entryId: string;
    url: string;
    constructor(data: LiveStreamUpdateOfflineThumbnailFromUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}