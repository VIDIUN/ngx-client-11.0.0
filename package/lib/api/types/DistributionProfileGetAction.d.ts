import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DistributionProfileGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'distributionProfile' action 'get'.
 *
 * Usage: Get Distribution Profile by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DistributionProfileGetAction extends KalturaRequest<KalturaDistributionProfile> {
    id: number;
    constructor(data: DistributionProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}