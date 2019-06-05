import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputListResponse } from './KalturaFlavorParamsOutputListResponse';
import { KalturaFlavorParamsOutputFilter } from './KalturaFlavorParamsOutputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorParamsOutputListActionArgs extends KalturaRequestArgs {
    filter?: KalturaFlavorParamsOutputFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'flavorParamsOutput' action 'list'.
 *
 * Usage: List flavor params output objects by filter and pager
 *
 * Server response type:         KalturaFlavorParamsOutputListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorParamsOutputListAction extends KalturaRequest<KalturaFlavorParamsOutputListResponse> {
    filter: KalturaFlavorParamsOutputFilter;
    pager: KalturaFilterPager;
    constructor(data?: FlavorParamsOutputListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}