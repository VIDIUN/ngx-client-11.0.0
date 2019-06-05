import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerGetSecretsActionArgs extends KalturaRequestArgs {
    partnerId: number;
    adminEmail: string;
    cmsPassword: string;
}
/**
 * Build request payload for service 'partner' action 'getSecrets'.
 *
 * Usage: Retrieve partner secret and admin secret
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerGetSecretsAction extends KalturaRequest<KalturaPartner> {
    partnerId: number;
    adminEmail: string;
    cmsPassword: string;
    constructor(data: PartnerGetSecretsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
