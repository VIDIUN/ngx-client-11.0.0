import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntryListResponse } from './KalturaCategoryEntryListResponse';
import { KalturaCategoryEntryFilter } from './KalturaCategoryEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryEntryListActionArgs extends KalturaRequestArgs {
    filter?: KalturaCategoryEntryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'categoryEntry' action 'list'.
 *
 * Usage: List all categoryEntry
 *
 * Server response type:         KalturaCategoryEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryEntryListAction extends KalturaRequest<KalturaCategoryEntryListResponse> {
    filter: KalturaCategoryEntryFilter;
    pager: KalturaFilterPager;
    constructor(data?: CategoryEntryListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
