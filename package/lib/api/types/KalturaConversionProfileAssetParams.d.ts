import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorReadyBehaviorType } from './KalturaFlavorReadyBehaviorType';
import { KalturaAssetParamsOrigin } from './KalturaAssetParamsOrigin';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAssetParamsDeletePolicy } from './KalturaAssetParamsDeletePolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaConversionProfileAssetParamsArgs extends KalturaObjectBaseArgs {
    readyBehavior?: KalturaFlavorReadyBehaviorType;
    origin?: KalturaAssetParamsOrigin;
    systemName?: string;
    forceNoneComplied?: KalturaNullableBoolean;
    deletePolicy?: KalturaAssetParamsDeletePolicy;
    isEncrypted?: KalturaNullableBoolean;
    contentAwareness?: number;
    chunkedEncodeMode?: number;
    twoPass?: KalturaNullableBoolean;
    tags?: string;
}
export declare class KalturaConversionProfileAssetParams extends KalturaObjectBase {
    readonly conversionProfileId: number;
    readonly assetParamsId: number;
    readyBehavior: KalturaFlavorReadyBehaviorType;
    origin: KalturaAssetParamsOrigin;
    systemName: string;
    forceNoneComplied: KalturaNullableBoolean;
    deletePolicy: KalturaAssetParamsDeletePolicy;
    isEncrypted: KalturaNullableBoolean;
    contentAwareness: number;
    chunkedEncodeMode: number;
    twoPass: KalturaNullableBoolean;
    tags: string;
    constructor(data?: KalturaConversionProfileAssetParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}