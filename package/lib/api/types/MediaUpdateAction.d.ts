import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaUpdateActionArgs extends KalturaRequestArgs {
    entryId: string;
    mediaEntry: KalturaMediaEntry;
}
/**
 * Build request payload for service 'media' action 'update'.
 *
 * Usage: Update media entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaUpdateAction extends KalturaRequest<KalturaMediaEntry> {
    entryId: string;
    mediaEntry: KalturaMediaEntry;
    constructor(data: MediaUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}