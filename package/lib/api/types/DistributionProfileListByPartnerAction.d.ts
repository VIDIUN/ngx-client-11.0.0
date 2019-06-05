import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileListResponse } from './KalturaDistributionProfileListResponse';
import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DistributionProfileListByPartnerActionArgs extends KalturaRequestArgs {
    filter?: KalturaPartnerFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'distributionProfile' action 'listByPartner'.
 *
 *
 *
 * Server response type:         KalturaDistributionProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DistributionProfileListByPartnerAction extends KalturaRequest<KalturaDistributionProfileListResponse> {
    filter: KalturaPartnerFilter;
    pager: KalturaFilterPager;
    constructor(data?: DistributionProfileListByPartnerActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
