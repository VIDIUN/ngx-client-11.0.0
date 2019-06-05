import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsOutputListResponse } from './KalturaThumbParamsOutputListResponse';
import { KalturaThumbParamsOutputFilter } from './KalturaThumbParamsOutputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbParamsOutputListActionArgs extends KalturaRequestArgs {
    filter?: KalturaThumbParamsOutputFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'thumbParamsOutput' action 'list'.
 *
 * Usage: List thumb params output objects by filter and pager
 *
 * Server response type:         KalturaThumbParamsOutputListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbParamsOutputListAction extends KalturaRequest<KalturaThumbParamsOutputListResponse> {
    filter: KalturaThumbParamsOutputFilter;
    pager: KalturaFilterPager;
    constructor(data?: ThumbParamsOutputListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
