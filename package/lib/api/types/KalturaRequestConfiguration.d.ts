import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseResponseProfile } from './KalturaBaseResponseProfile';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaRequestConfigurationArgs extends KalturaObjectBaseArgs {
    partnerId?: number;
    ks?: string;
    responseProfile?: KalturaBaseResponseProfile;
}
export declare class KalturaRequestConfiguration extends KalturaObjectBase {
    partnerId: number;
    ks: string;
    responseProfile: KalturaBaseResponseProfile;
    constructor(data?: KalturaRequestConfigurationArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
