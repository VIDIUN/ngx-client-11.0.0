import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderListResponse } from './KalturaGenericDistributionProviderListResponse';
import { KalturaGenericDistributionProviderFilter } from './KalturaGenericDistributionProviderFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderListActionArgs extends KalturaRequestArgs {
    filter?: KalturaGenericDistributionProviderFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'genericDistributionProvider' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaGenericDistributionProviderListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderListAction extends KalturaRequest<KalturaGenericDistributionProviderListResponse> {
    filter: KalturaGenericDistributionProviderFilter;
    pager: KalturaFilterPager;
    constructor(data?: GenericDistributionProviderListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}