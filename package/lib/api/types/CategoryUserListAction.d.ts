import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUserListResponse } from './KalturaCategoryUserListResponse';
import { KalturaCategoryUserFilter } from './KalturaCategoryUserFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUserListActionArgs extends KalturaRequestArgs {
    filter?: KalturaCategoryUserFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'categoryUser' action 'list'.
 *
 * Usage: List all categories
 *
 * Server response type:         KalturaCategoryUserListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserListAction extends KalturaRequest<KalturaCategoryUserListResponse> {
    filter: KalturaCategoryUserFilter;
    pager: KalturaFilterPager;
    constructor(data?: CategoryUserListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
