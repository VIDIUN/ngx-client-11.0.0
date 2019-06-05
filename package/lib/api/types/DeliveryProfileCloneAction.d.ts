import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DeliveryProfileCloneActionArgs extends KalturaRequestArgs {
    deliveryId: number;
}
/**
 * Build request payload for service 'deliveryProfile' action 'clone'.
 *
 * Usage: Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DeliveryProfileCloneAction extends KalturaRequest<KalturaDeliveryProfile> {
    deliveryId: number;
    constructor(data: DeliveryProfileCloneActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}