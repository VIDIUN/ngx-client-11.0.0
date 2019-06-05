import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderListResponse } from './KalturaDistributionProviderListResponse';
import { KalturaDistributionProviderFilter } from './KalturaDistributionProviderFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DistributionProviderListActionArgs extends KalturaRequestArgs {
    filter?: KalturaDistributionProviderFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'distributionProvider' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaDistributionProviderListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DistributionProviderListAction extends KalturaRequest<KalturaDistributionProviderListResponse> {
    filter: KalturaDistributionProviderFilter;
    pager: KalturaFilterPager;
    constructor(data?: DistributionProviderListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}