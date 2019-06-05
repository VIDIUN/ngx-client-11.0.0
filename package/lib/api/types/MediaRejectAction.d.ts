import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaRejectActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'media' action 'reject'.
 *
 * Usage: Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class MediaRejectAction extends KalturaRequest<void> {
    entryId: string;
    constructor(data: MediaRejectActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
