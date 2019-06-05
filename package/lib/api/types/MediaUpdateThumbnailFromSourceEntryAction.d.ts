import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaUpdateThumbnailFromSourceEntryActionArgs extends KalturaRequestArgs {
    entryId: string;
    sourceEntryId: string;
    timeOffset: number;
    flavorParamsId?: number;
}
/**
 * Build request payload for service 'media' action 'updateThumbnailFromSourceEntry'.
 *
 * Usage: Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaUpdateThumbnailFromSourceEntryAction extends KalturaRequest<KalturaMediaEntry> {
    entryId: string;
    sourceEntryId: string;
    timeOffset: number;
    flavorParamsId: number;
    constructor(data: MediaUpdateThumbnailFromSourceEntryActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}