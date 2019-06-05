import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetListResponse } from './KalturaFlavorAssetListResponse';
import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetListActionArgs extends KalturaRequestArgs {
    filter?: KalturaAssetFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'flavorAsset' action 'list'.
 *
 * Usage: List Flavor Assets by filter and pager
 *
 * Server response type:         KalturaFlavorAssetListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetListAction extends KalturaRequest<KalturaFlavorAssetListResponse> {
    filter: KalturaAssetFilter;
    pager: KalturaFilterPager;
    constructor(data?: FlavorAssetListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}