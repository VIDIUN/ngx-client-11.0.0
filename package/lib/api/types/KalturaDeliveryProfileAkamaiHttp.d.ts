import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileAkamaiHttpArgs extends KalturaDeliveryProfileArgs {
    useIntelliseek?: boolean;
}
export declare class KalturaDeliveryProfileAkamaiHttp extends KalturaDeliveryProfile {
    useIntelliseek: boolean;
    constructor(data?: KalturaDeliveryProfileAkamaiHttpArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
