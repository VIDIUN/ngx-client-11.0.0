import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixListResponse } from './KalturaMixListResponse';
import { KalturaMixEntryFilter } from './KalturaMixEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingListActionArgs extends KalturaRequestArgs {
    filter?: KalturaMixEntryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'mixing' action 'list'.
 *
 * Usage: List entries by filter with paging support.
 * Return parameter is an array of mix entries
 *
 * Server response type:         KalturaMixListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class MixingListAction extends KalturaRequest<KalturaMixListResponse> {
    filter: KalturaMixEntryFilter;
    pager: KalturaFilterPager;
    constructor(data?: MixingListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}