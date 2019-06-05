import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFeatureStatusListResponse } from './KalturaFeatureStatusListResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PartnerListFeatureStatusActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'partner' action 'listFeatureStatus'.
 *
 * Usage: List partner's current processes' statuses
 *
 * Server response type:         KalturaFeatureStatusListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class PartnerListFeatureStatusAction extends KalturaRequest<KalturaFeatureStatusListResponse> {
    constructor(data?: PartnerListFeatureStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
