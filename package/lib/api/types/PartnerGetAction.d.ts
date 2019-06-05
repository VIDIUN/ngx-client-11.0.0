import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerGetActionArgs extends KalturaRequestArgs {
    id?: number;
}
/**
 * Build request payload for service 'partner' action 'get'.
 *
 * Usage: Retrieve partner object by Id
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerGetAction extends KalturaRequest<KalturaPartner> {
    id: number;
    constructor(data?: PartnerGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}