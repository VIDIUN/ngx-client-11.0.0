import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DeliveryProfileGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'deliveryProfile' action 'get'.
 *
 * Usage: Get delivery by id
 *
 * Server response type:         KalturaDeliveryProfile
 * Server failure response type: KalturaAPIException
 */
export declare class DeliveryProfileGetAction extends KalturaRequest<KalturaDeliveryProfile> {
    id: string;
    constructor(data: DeliveryProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
