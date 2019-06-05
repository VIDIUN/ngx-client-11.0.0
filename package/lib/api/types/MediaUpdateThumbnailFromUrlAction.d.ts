import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaUpdateThumbnailFromUrlActionArgs extends KalturaRequestArgs {
    entryId: string;
    url: string;
}
/**
 * Build request payload for service 'media' action 'updateThumbnailFromUrl'.
 *
 * Usage: Update entry thumbnail using url
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaUpdateThumbnailFromUrlAction extends KalturaRequest<KalturaBaseEntry> {
    entryId: string;
    url: string;
    constructor(data: MediaUpdateThumbnailFromUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
