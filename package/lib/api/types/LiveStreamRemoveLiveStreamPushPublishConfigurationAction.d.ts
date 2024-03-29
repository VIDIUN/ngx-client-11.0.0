import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs extends KalturaRequestArgs {
    entryId: string;
    protocol: KalturaPlaybackProtocol;
}
/**
 * Build request payload for service 'liveStream' action 'removeLiveStreamPushPublishConfiguration'.
 *
 * Usage: Remove push publish configuration from entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamRemoveLiveStreamPushPublishConfigurationAction extends KalturaRequest<KalturaLiveStreamEntry> {
    entryId: string;
    protocol: KalturaPlaybackProtocol;
    constructor(data: LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
