import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamGetActionArgs extends KalturaRequestArgs {
    entryId: string;
    version?: number;
}
/**
 * Build request payload for service 'liveStream' action 'get'.
 *
 * Usage: Get live stream entry by ID
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamGetAction extends KalturaRequest<KalturaLiveStreamEntry> {
    entryId: string;
    version: number;
    constructor(data: LiveStreamGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}