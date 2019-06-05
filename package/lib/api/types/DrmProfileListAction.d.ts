import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfileListResponse } from './KalturaDrmProfileListResponse';
import { KalturaDrmProfileFilter } from './KalturaDrmProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaDrmProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'drmProfile' action 'list'.
 *
 * Usage: List KalturaDrmProfile objects
 *
 * Server response type:         KalturaDrmProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DrmProfileListAction extends KalturaRequest<KalturaDrmProfileListResponse> {
    filter: KalturaDrmProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: DrmProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}