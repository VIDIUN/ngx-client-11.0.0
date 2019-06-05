import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DeliveryProfileAddActionArgs extends KalturaRequestArgs {
    delivery: KalturaDeliveryProfile;
}
/**
 * Build request payload for service 'deliveryProfile' action 'add'.
 *
 * Usage: Add new delivery
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DeliveryProfileAddAction extends KalturaRequest<KalturaDeliveryProfile> {
    delivery: KalturaDeliveryProfile;
    constructor(data: DeliveryProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
