import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamSetRecordedContentActionArgs extends KalturaRequestArgs {
    entryId: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    resource: KalturaDataCenterContentResource;
    duration: number;
    recordedEntryId?: string;
    flavorParamsId?: number;
}
/**
 * Build request payload for service 'liveStream' action 'setRecordedContent'.
 *
 * Usage: Set recorded video to live entry
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamSetRecordedContentAction extends KalturaRequest<KalturaLiveEntry> {
    entryId: string;
    mediaServerIndex: KalturaEntryServerNodeType;
    resource: KalturaDataCenterContentResource;
    duration: number;
    recordedEntryId: string;
    flavorParamsId: number;
    constructor(data: LiveStreamSetRecordedContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}