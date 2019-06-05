import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaLiveStreamConfiguration } from './KalturaLiveStreamConfiguration';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamAddLiveStreamPushPublishConfigurationActionArgs extends KalturaRequestArgs {
    entryId: string;
    protocol: KalturaPlaybackProtocol;
    url?: string;
    liveStreamConfiguration?: KalturaLiveStreamConfiguration;
}
/**
 * Build request payload for service 'liveStream' action 'addLiveStreamPushPublishConfiguration'.
 *
 * Usage: Add new pushPublish configuration to entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamAddLiveStreamPushPublishConfigurationAction extends KalturaRequest<KalturaLiveStreamEntry> {
    entryId: string;
    protocol: KalturaPlaybackProtocol;
    url: string;
    liveStreamConfiguration: KalturaLiveStreamConfiguration;
    constructor(data: LiveStreamAddLiveStreamPushPublishConfigurationActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
