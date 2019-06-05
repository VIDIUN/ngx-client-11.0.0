import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerUsageListResponse } from './KalturaPartnerUsageListResponse';
import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface VarConsoleGetPartnerUsageActionArgs extends KalturaRequestArgs {
    partnerFilter?: KalturaPartnerFilter;
    usageFilter?: KalturaReportInputFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'varConsole' action 'getPartnerUsage'.
 *
 * Usage: Function which calulates partner usage of a group of a VAR's sub-publishers
 *
 * Server response type:         KalturaPartnerUsageListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class VarConsoleGetPartnerUsageAction extends KalturaRequest<KalturaPartnerUsageListResponse> {
    partnerFilter: KalturaPartnerFilter;
    usageFilter: KalturaReportInputFilter;
    pager: KalturaFilterPager;
    constructor(data?: VarConsoleGetPartnerUsageActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
