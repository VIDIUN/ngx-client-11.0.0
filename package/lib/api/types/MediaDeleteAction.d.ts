import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaDeleteActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'media' action 'delete'.
 *
 * Usage: Delete a media entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class MediaDeleteAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: MediaDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
