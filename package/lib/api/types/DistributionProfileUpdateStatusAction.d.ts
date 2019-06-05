import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaDistributionProfileStatus } from './KalturaDistributionProfileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DistributionProfileUpdateStatusActionArgs extends KalturaRequestArgs {
    id: number;
    status: KalturaDistributionProfileStatus;
}
/**
 * Build request payload for service 'distributionProfile' action 'updateStatus'.
 *
 * Usage: Update Distribution Profile status by id
 *
 * Server response type:         KalturaDistributionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DistributionProfileUpdateStatusAction extends KalturaRequest<KalturaDistributionProfile> {
    id: number;
    status: KalturaDistributionProfileStatus;
    constructor(data: DistributionProfileUpdateStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
