import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileVodPackagerPlayServerArgs extends KalturaDeliveryProfileArgs {
    adStitchingEnabled?: boolean;
}
export declare class KalturaDeliveryProfileVodPackagerPlayServer extends KalturaDeliveryProfile {
    adStitchingEnabled: boolean;
    constructor(data?: KalturaDeliveryProfileVodPackagerPlayServerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
