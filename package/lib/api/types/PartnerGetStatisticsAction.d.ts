import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerStatistics } from './KalturaPartnerStatistics';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerGetStatisticsActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'partner' action 'getStatistics'.
 *
 * Usage: Get usage statistics for a partner
 * Calculation is done according to partner's package
 *
 * Server response type:         KalturaPartnerStatistics
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerGetStatisticsAction extends KalturaRequest<KalturaPartnerStatistics> {
    constructor(data?: PartnerGetStatisticsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
