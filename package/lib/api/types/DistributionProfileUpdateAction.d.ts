import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DistributionProfileUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    distributionProfile: KalturaDistributionProfile;
}
/**
 * Build request payload for service 'distributionProfile' action 'update'.
 *
 * Usage: Update Distribution Profile by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DistributionProfileUpdateAction extends KalturaRequest<KalturaDistributionProfile> {
    id: number;
    distributionProfile: KalturaDistributionProfile;
    constructor(data: DistributionProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}