import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaAddFromEntryActionArgs extends KalturaRequestArgs {
    sourceEntryId: string;
    mediaEntry?: KalturaMediaEntry;
    sourceFlavorParamsId?: number;
}
/**
 * Build request payload for service 'media' action 'addFromEntry'.
 *
 * Usage: Copy entry into new entry
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaAddFromEntryAction extends KalturaRequest<KalturaMediaEntry> {
    sourceEntryId: string;
    mediaEntry: KalturaMediaEntry;
    sourceFlavorParamsId: number;
    constructor(data: MediaAddFromEntryActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}