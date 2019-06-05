import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaModerationFlagListResponse } from './KalturaModerationFlagListResponse';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryListFlagsActionArgs extends KalturaRequestArgs {
    entryId: string;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'baseEntry' action 'listFlags'.
 *
 * Usage: List all pending flags for the entry
 *
 * Server response type:         KalturaModerationFlagListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryListFlagsAction extends KalturaRequest<KalturaModerationFlagListResponse> {
    entryId: string;
    pager: KalturaFilterPager;
    constructor(data: BaseEntryListFlagsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
