import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveChannelAppendRecordingActionArgs extends KalturaRequestArgs {
    entryId: string;
    assetId: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    resource: KalturaDataCenterContentResource;
    duration: number;
    isLastChunk?: boolean;
}
/**
 * Build request payload for service 'liveChannel' action 'appendRecording'.
 *
 * Usage: Append recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveChannelAppendRecordingAction extends KalturaRequest<KalturaLiveEntry> {
    entryId: string;
    assetId: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    resource: KalturaDataCenterContentResource;
    duration: number;
    isLastChunk: boolean;
    constructor(data: LiveChannelAppendRecordingActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
