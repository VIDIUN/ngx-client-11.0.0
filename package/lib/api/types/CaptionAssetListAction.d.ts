import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAssetListResponse } from './KalturaCaptionAssetListResponse';
import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetListActionArgs extends KalturaRequestArgs {
    filter?: KalturaAssetFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'captionAsset' action 'list'.
 *
 * Usage: List caption Assets by filter and pager
 *
 * Server response type:         KalturaCaptionAssetListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetListAction extends KalturaRequest<KalturaCaptionAssetListResponse> {
    filter: KalturaAssetFilter;
    pager: KalturaFilterPager;
    constructor(data?: CaptionAssetListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
