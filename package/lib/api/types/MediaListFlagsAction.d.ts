import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaModerationFlagListResponse } from './KalturaModerationFlagListResponse';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaListFlagsActionArgs extends KalturaRequestArgs {
    entryId: string;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'media' action 'listFlags'.
 *
 * Usage: List all pending flags for the media entry
 *
 * Server response type:         KalturaModerationFlagListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class MediaListFlagsAction extends KalturaRequest<KalturaModerationFlagListResponse> {
    entryId: string;
    pager: KalturaFilterPager;
    constructor(data: MediaListFlagsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}