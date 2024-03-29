import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeaconListResponse } from './KalturaBeaconListResponse';
import { KalturaBeaconEnhanceFilter } from './KalturaBeaconEnhanceFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BeaconEnhanceSearchActionArgs extends KalturaRequestArgs {
    filter?: KalturaBeaconEnhanceFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'beacon' action 'enhanceSearch'.
 *
 *
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class BeaconEnhanceSearchAction extends KalturaRequest<KalturaBeaconListResponse> {
    filter: KalturaBeaconEnhanceFilter;
    pager: KalturaFilterPager;
    constructor(data?: BeaconEnhanceSearchActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
