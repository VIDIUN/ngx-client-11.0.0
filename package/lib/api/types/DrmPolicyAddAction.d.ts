import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmPolicyAddActionArgs extends KalturaRequestArgs {
    drmPolicy: KalturaDrmPolicy;
}
/**
 * Build request payload for service 'drmPolicy' action 'add'.
 *
 * Usage: Allows you to add a new DrmPolicy object
 *
 * Server response type:         KalturaDrmPolicy
 * Server failure response type: KalturaAPIException
 */
export declare class DrmPolicyAddAction extends KalturaRequest<KalturaDrmPolicy> {
    drmPolicy: KalturaDrmPolicy;
    constructor(data: DrmPolicyAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
