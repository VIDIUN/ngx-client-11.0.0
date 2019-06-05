import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerCountActionArgs extends KalturaRequestArgs {
    filter?: KalturaPartnerFilter;
}
/**
 * Build request payload for service 'partner' action 'count'.
 *
 * Usage: Count partner's existing sub-publishers (count includes the partner itself)
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerCountAction extends KalturaRequest<number> {
    filter: KalturaPartnerFilter;
    constructor(data?: PartnerCountActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
