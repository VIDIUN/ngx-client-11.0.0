import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmPolicyDeleteActionArgs extends KalturaRequestArgs {
    drmPolicyId: number;
}
/**
 * Build request payload for service 'drmPolicy' action 'delete'.
 *
 * Usage: Mark the KalturaDrmPolicy object as deleted
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
export declare class DrmPolicyDeleteAction extends KalturaRequest<KalturaDrmPolicy> {
    drmPolicyId: number;
    constructor(data: DrmPolicyDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
