import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeaconListResponse } from './KalturaBeaconListResponse';
import { KalturaBeaconFilter } from './KalturaBeaconFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BeaconListActionArgs extends KalturaRequestArgs {
    filter?: KalturaBeaconFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'beacon' action 'list'.
 *
 *
 *
 * Server response type:         KalturaBeaconListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class BeaconListAction extends KalturaRequest<KalturaBeaconListResponse> {
    filter: KalturaBeaconFilter;
    pager: KalturaFilterPager;
    constructor(data?: BeaconListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
