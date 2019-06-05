import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DistributionProfileAddActionArgs extends KalturaRequestArgs {
    distributionProfile: KalturaDistributionProfile;
}
/**
 * Build request payload for service 'distributionProfile' action 'add'.
 *
 * Usage: Add new Distribution Profile
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DistributionProfileAddAction extends KalturaRequest<KalturaDistributionProfile> {
    distributionProfile: KalturaDistributionProfile;
    constructor(data: DistributionProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}