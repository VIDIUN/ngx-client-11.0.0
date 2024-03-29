import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryUpdateThumbnailFromUrlActionArgs extends KalturaRequestArgs {
    entryId: string;
    url: string;
}
/**
 * Build request payload for service 'baseEntry' action 'updateThumbnailFromUrl'.
 *
 * Usage: Update entry thumbnail using url
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryUpdateThumbnailFromUrlAction extends KalturaRequest<KalturaBaseEntry> {
    entryId: string;
    url: string;
    constructor(data: BaseEntryUpdateThumbnailFromUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
