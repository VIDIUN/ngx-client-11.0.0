import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DeliveryProfileUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    delivery: KalturaDeliveryProfile;
}
/**
 * Build request payload for service 'deliveryProfile' action 'update'.
 *
 * Usage: Update exisiting delivery
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DeliveryProfileUpdateAction extends KalturaRequest<KalturaDeliveryProfile> {
    id: string;
    delivery: KalturaDeliveryProfile;
    constructor(data: DeliveryProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}