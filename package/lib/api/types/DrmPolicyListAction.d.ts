import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicyListResponse } from './KalturaDrmPolicyListResponse';
import { KalturaDrmPolicyFilter } from './KalturaDrmPolicyFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DrmPolicyListActionArgs extends KalturaRequestArgs {
    filter?: KalturaDrmPolicyFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'drmPolicy' action 'list'.
 *
 * Usage: List KalturaDrmPolicy objects
 *
 * Server response type:         KalturaDrmPolicyListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DrmPolicyListAction extends KalturaRequest<KalturaDrmPolicyListResponse> {
    filter: KalturaDrmPolicyFilter;
    pager: KalturaFilterPager;
    constructor(data?: DrmPolicyListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
