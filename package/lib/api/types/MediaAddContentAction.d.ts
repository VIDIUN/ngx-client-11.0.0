import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaAddContentActionArgs extends KalturaRequestArgs {
    entryId: string;
    resource?: KalturaResource;
}
/**
 * Build request payload for service 'media' action 'addContent'.
 *
 * Usage: Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaAddContentAction extends KalturaRequest<KalturaMediaEntry> {
    entryId: string;
    resource: KalturaResource;
    constructor(data: MediaAddContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
