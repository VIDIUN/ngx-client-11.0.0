import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerRegisterActionArgs extends KalturaRequestArgs {
    partner: KalturaPartner;
    cmsPassword?: string;
    templatePartnerId?: number;
    silent?: boolean;
}
/**
 * Build request payload for service 'partner' action 'register'.
 *
 * Usage: Create a new Partner object
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerRegisterAction extends KalturaRequest<KalturaPartner> {
    partner: KalturaPartner;
    cmsPassword: string;
    templatePartnerId: number;
    silent: boolean;
    constructor(data: PartnerRegisterActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}