import { KalturaObjectMetadata } from './kaltura-object-base';
import { KalturaBaseResponseProfile } from './types/KalturaBaseResponseProfile';
import { KalturaObjectBase, KalturaObjectBaseArgs } from './kaltura-object-base';
import { InjectionToken } from '@angular/core';
export declare const KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS: InjectionToken<KalturaRequestOptionsArgs>;
export interface KalturaRequestOptionsArgs extends KalturaObjectBaseArgs {
    acceptedTypes?: {
        new (...args: any[]): KalturaObjectBase;
    }[];
    partnerId?: number;
    ks?: string;
    responseProfile?: KalturaBaseResponseProfile;
}
export declare class KalturaRequestOptions extends KalturaObjectBase {
    acceptedTypes: {
        new (...args: any[]): KalturaObjectBase;
    }[];
    partnerId: number;
    ks: string;
    responseProfile: KalturaBaseResponseProfile;
    constructor(data?: KalturaRequestOptionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
