import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderActionListResponse } from './KalturaGenericDistributionProviderActionListResponse';
import { KalturaGenericDistributionProviderActionFilter } from './KalturaGenericDistributionProviderActionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GenericDistributionProviderActionListActionArgs extends KalturaRequestArgs {
    filter?: KalturaGenericDistributionProviderActionFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaGenericDistributionProviderActionListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionListAction extends KalturaRequest<KalturaGenericDistributionProviderActionListResponse> {
    filter: KalturaGenericDistributionProviderActionFilter;
    pager: KalturaFilterPager;
    constructor(data?: GenericDistributionProviderActionListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}