import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaSourceType } from './KalturaSourceType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamAddActionArgs extends KalturaRequestArgs {
    liveStreamEntry: KalturaLiveStreamEntry;
    sourceType?: KalturaSourceType;
}
/**
 * Build request payload for service 'liveStream' action 'add'.
 *
 * Usage: Adds new live stream entry.
 * The entry will be queued for provision
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamAddAction extends KalturaRequest<KalturaLiveStreamEntry> {
    liveStreamEntry: KalturaLiveStreamEntry;
    sourceType: KalturaSourceType;
    constructor(data: LiveStreamAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
