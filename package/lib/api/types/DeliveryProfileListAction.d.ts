import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileListResponse } from './KalturaDeliveryProfileListResponse';
import { KalturaDeliveryProfileFilter } from './KalturaDeliveryProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DeliveryProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaDeliveryProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'deliveryProfile' action 'list'.
 *
 * Usage: Retrieve a list of available delivery depends on the filter given
 *
 * Server response type:         KalturaDeliveryProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DeliveryProfileListAction extends KalturaRequest<KalturaDeliveryProfileListResponse> {
    filter: KalturaDeliveryProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: DeliveryProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}