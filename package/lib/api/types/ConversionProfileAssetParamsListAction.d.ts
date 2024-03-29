import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileAssetParamsListResponse } from './KalturaConversionProfileAssetParamsListResponse';
import { KalturaConversionProfileAssetParamsFilter } from './KalturaConversionProfileAssetParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ConversionProfileAssetParamsListActionArgs extends KalturaRequestArgs {
    filter?: KalturaConversionProfileAssetParamsFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'conversionProfileAssetParams' action 'list'.
 *
 * Usage: Lists asset parmas of conversion profile by ID
 *
 * Server response type:         KalturaConversionProfileAssetParamsListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ConversionProfileAssetParamsListAction extends KalturaRequest<KalturaConversionProfileAssetParamsListResponse> {
    filter: KalturaConversionProfileAssetParamsFilter;
    pager: KalturaFilterPager;
    constructor(data?: ConversionProfileAssetParamsListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
