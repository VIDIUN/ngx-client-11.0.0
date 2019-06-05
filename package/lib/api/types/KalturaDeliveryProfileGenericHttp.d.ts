import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileGenericHttpArgs extends KalturaDeliveryProfileArgs {
    pattern?: string;
}
export declare class KalturaDeliveryProfileGenericHttp extends KalturaDeliveryProfile {
    pattern: string;
    constructor(data?: KalturaDeliveryProfileGenericHttpArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
