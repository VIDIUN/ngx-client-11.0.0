import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerListResponse } from './KalturaPartnerListResponse';
import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerListPartnersForUserActionArgs extends KalturaRequestArgs {
    partnerFilter?: KalturaPartnerFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'partner' action 'listPartnersForUser'.
 *
 * Usage: Retrieve a list of partner objects which the current user is allowed to access
 *
 * Server response type:         KalturaPartnerListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerListPartnersForUserAction extends KalturaRequest<KalturaPartnerListResponse> {
    partnerFilter: KalturaPartnerFilter;
    pager: KalturaFilterPager;
    constructor(data?: PartnerListPartnersForUserActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}