import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SyndicationFeedDeleteActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'syndicationFeed' action 'delete'.
 *
 * Usage: Delete Syndication Feed by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class SyndicationFeedDeleteAction extends KalturaRequest<void> {
    id: string;
    constructor(data: SyndicationFeedDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
