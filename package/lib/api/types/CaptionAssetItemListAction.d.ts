import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAssetItemListResponse } from './KalturaCaptionAssetItemListResponse';
import { KalturaCaptionAssetItemFilter } from './KalturaCaptionAssetItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetItemListActionArgs extends KalturaRequestArgs {
    captionAssetId: string;
    captionAssetItemFilter?: KalturaCaptionAssetItemFilter;
    captionAssetItemPager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'captionAssetItem' action 'list'.
 *
 * Usage: List caption asset items by filter and pager
 *
 * Server response type:         KalturaCaptionAssetItemListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetItemListAction extends KalturaRequest<KalturaCaptionAssetItemListResponse> {
    captionAssetId: string;
    captionAssetItemFilter: KalturaCaptionAssetItemFilter;
    captionAssetItemPager: KalturaFilterPager;
    constructor(data: CaptionAssetItemListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
