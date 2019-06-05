import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaAddFromBulkActionArgs extends KalturaRequestArgs {
    mediaEntry: KalturaMediaEntry;
    url: string;
    bulkUploadId: number;
}
/**
 * Build request payload for service 'media' action 'addFromBulk'.
 *
 * Usage: Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * This action should be exposed only to the batches
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaAddFromBulkAction extends KalturaRequest<KalturaMediaEntry> {
    mediaEntry: KalturaMediaEntry;
    url: string;
    bulkUploadId: number;
    constructor(data: MediaAddFromBulkActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
