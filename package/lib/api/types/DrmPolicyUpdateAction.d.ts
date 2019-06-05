import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmPolicyUpdateActionArgs extends KalturaRequestArgs {
    drmPolicyId: number;
    drmPolicy: KalturaDrmPolicy;
}
/**
 * Build request payload for service 'drmPolicy' action 'update'.
 *
 * Usage: Update an existing KalturaDrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
export declare class DrmPolicyUpdateAction extends KalturaRequest<KalturaDrmPolicy> {
    drmPolicyId: number;
    drmPolicy: KalturaDrmPolicy;
    constructor(data: DrmPolicyUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
