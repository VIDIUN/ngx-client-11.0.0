import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerGetInfoActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'partner' action 'getInfo'.
 *
 * Usage: Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current KS partnerId
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerGetInfoAction extends KalturaRequest<KalturaPartner> {
    constructor(data?: PartnerGetInfoActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}