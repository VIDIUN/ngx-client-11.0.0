import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaAddFromUrlActionArgs extends KalturaRequestArgs {
    mediaEntry: KalturaMediaEntry;
    url: string;
}
/**
 * Build request payload for service 'media' action 'addFromUrl'.
 *
 * Usage: Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaAddFromUrlAction extends KalturaRequest<KalturaMediaEntry> {
    mediaEntry: KalturaMediaEntry;
    url: string;
    constructor(data: MediaAddFromUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}