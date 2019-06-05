import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmPolicyGetActionArgs extends KalturaRequestArgs {
    drmPolicyId: number;
}
/**
 * Build request payload for service 'drmPolicy' action 'get'.
 *
 * Usage: Retrieve a KalturaDrmPolicy object by ID
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
export declare class DrmPolicyGetAction extends KalturaRequest<KalturaDrmPolicy> {
    drmPolicyId: number;
    constructor(data: DrmPolicyGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}