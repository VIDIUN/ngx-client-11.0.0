import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmProfileGetByProviderActionArgs extends KalturaRequestArgs {
    provider: KalturaDrmProviderType;
}
/**
 * Build request payload for service 'drmProfile' action 'getByProvider'.
 *
 * Usage: Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DrmProfileGetByProviderAction extends KalturaRequest<KalturaDrmProfile> {
    provider: KalturaDrmProviderType;
    constructor(data: DrmProfileGetByProviderActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}