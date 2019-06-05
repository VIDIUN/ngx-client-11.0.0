import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAssetListResponse } from './KalturaThumbAssetListResponse';
import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetListActionArgs extends KalturaRequestArgs {
    filter?: KalturaAssetFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'thumbAsset' action 'list'.
 *
 * Usage: List Thumbnail Assets by filter and pager
 *
 * Server response type:         KalturaThumbAssetListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetListAction extends KalturaRequest<KalturaThumbAssetListResponse> {
    filter: KalturaAssetFilter;
    pager: KalturaFilterPager;
    constructor(data?: ThumbAssetListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
