import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileListResponse } from './KalturaConversionProfileListResponse';
import { KalturaConversionProfileFilter } from './KalturaConversionProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ConversionProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaConversionProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'conversionProfile' action 'list'.
 *
 * Usage: List Conversion Profiles by filter with paging support
 *
 * Server response type:         KalturaConversionProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ConversionProfileListAction extends KalturaRequest<KalturaConversionProfileListResponse> {
    filter: KalturaConversionProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: ConversionProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
