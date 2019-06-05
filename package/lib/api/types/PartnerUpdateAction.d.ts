import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerUpdateActionArgs extends KalturaRequestArgs {
    partner: KalturaPartner;
    allowEmpty?: boolean;
}
/**
 * Build request payload for service 'partner' action 'update'.
 *
 * Usage: Update details and settings of an existing partner
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerUpdateAction extends KalturaRequest<KalturaPartner> {
    partner: KalturaPartner;
    allowEmpty: boolean;
    constructor(data: PartnerUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}