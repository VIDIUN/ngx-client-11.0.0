import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerUsage } from './KalturaPartnerUsage';
import { KalturaReportInterval } from './KalturaReportInterval';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerGetUsageActionArgs extends KalturaRequestArgs {
    year?: number;
    month?: number;
    resolution?: KalturaReportInterval;
}
/**
 * Build request payload for service 'partner' action 'getUsage'.
 *
 * Usage: Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a timeframe
 * The resolution can be "days" or "months"
 *
 * Server response type:         KalturaPartnerUsage
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerGetUsageAction extends KalturaRequest<KalturaPartnerUsage> {
    year: number;
    month: number;
    resolution: KalturaReportInterval;
    constructor(data?: PartnerGetUsageActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
