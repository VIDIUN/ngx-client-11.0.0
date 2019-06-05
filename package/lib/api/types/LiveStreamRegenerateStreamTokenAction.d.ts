import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamRegenerateStreamTokenActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'liveStream' action 'regenerateStreamToken'.
 *
 * Usage: Regenerate new secure token for liveStream
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamRegenerateStreamTokenAction extends KalturaRequest<KalturaLiveEntry> {
    entryId: string;
    constructor(data: LiveStreamRegenerateStreamTokenActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}