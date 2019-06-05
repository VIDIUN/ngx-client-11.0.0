import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileListResponse } from './KalturaDistributionProfileListResponse';
import { KalturaDistributionProfileFilter } from './KalturaDistributionProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DistributionProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaDistributionProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'distributionProfile' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaDistributionProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DistributionProfileListAction extends KalturaRequest<KalturaDistributionProfileListResponse> {
    filter: KalturaDistributionProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: DistributionProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
