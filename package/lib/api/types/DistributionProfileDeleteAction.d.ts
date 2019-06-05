import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DistributionProfileDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'distributionProfile' action 'delete'.
 *
 * Usage: Delete Distribution Profile by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class DistributionProfileDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: DistributionProfileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
