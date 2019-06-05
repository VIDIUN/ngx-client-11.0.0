import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaUpdateThumbnailActionArgs extends KalturaRequestArgs {
    entryId: string;
    timeOffset: number;
    flavorParamsId?: number;
}
/**
 * Build request payload for service 'media' action 'updateThumbnail'.
 *
 * Usage: Update media entry thumbnail by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaUpdateThumbnailAction extends KalturaRequest<KalturaMediaEntry> {
    entryId: string;
    timeOffset: number;
    flavorParamsId: number;
    constructor(data: MediaUpdateThumbnailActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}