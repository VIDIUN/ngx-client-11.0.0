import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryListResponse } from './KalturaCategoryListResponse';
import { KalturaCategoryFilter } from './KalturaCategoryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryListActionArgs extends KalturaRequestArgs {
    filter?: KalturaCategoryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'category' action 'list'.
 *
 * Usage: List all categories
 *
 * Server response type:         KalturaCategoryListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryListAction extends KalturaRequest<KalturaCategoryListResponse> {
    filter: KalturaCategoryFilter;
    pager: KalturaFilterPager;
    constructor(data?: CategoryListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}