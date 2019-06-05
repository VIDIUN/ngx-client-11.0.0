import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaAddActionArgs extends KalturaRequestArgs {
    entry: KalturaMediaEntry;
}
/**
 * Build request payload for service 'media' action 'add'.
 *
 * Usage: Add entry
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaAddAction extends KalturaRequest<KalturaMediaEntry> {
    entry: KalturaMediaEntry;
    constructor(data: MediaAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}