import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryListResponse } from './KalturaBaseEntryListResponse';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetItemSearchEntriesActionArgs extends KalturaRequestArgs {
    entryFilter?: KalturaBaseEntryFilter;
    captionAssetItemFilter?: KalturaCaptionAssetItemFilter;
    captionAssetItemPager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'captionAssetItem' action 'searchEntries'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaBaseEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetItemSearchEntriesAction extends KalturaRequest<KalturaBaseEntryListResponse> {
    entryFilter: KalturaBaseEntryFilter;
    captionAssetItemFilter: KalturaCaptionAssetItemFilter;
    captionAssetItemPager: KalturaFilterPager;
    constructor(data?: CaptionAssetItemSearchEntriesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}