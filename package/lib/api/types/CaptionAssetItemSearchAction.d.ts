import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAssetItemListResponse } from './KalturaCaptionAssetItemListResponse';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetItemSearchActionArgs extends KalturaRequestArgs {
    entryFilter?: KalturaBaseEntryFilter;
    captionAssetItemFilter?: KalturaCaptionAssetItemFilter;
    captionAssetItemPager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'captionAssetItem' action 'search'.
 *
 * Usage: Search caption asset items by filter, pager and free text
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetItemSearchAction extends KalturaRequest<KalturaCaptionAssetItemListResponse> {
    entryFilter: KalturaBaseEntryFilter;
    captionAssetItemFilter: KalturaCaptionAssetItemFilter;
    captionAssetItemPager: KalturaFilterPager;
    constructor(data?: CaptionAssetItemSearchActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}