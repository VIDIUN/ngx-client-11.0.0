import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaLanguageCode } from './KalturaLanguageCode';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaCaptionAssetStatus } from './KalturaCaptionAssetStatus';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';
export interface KalturaCaptionAssetArgs extends KalturaAssetArgs {
    captionParamsId?: number;
    language?: KalturaLanguage;
    isDefault?: KalturaNullableBoolean;
    label?: string;
    format?: KalturaCaptionType;
    parentId?: string;
    accuracy?: number;
}
export declare class KalturaCaptionAsset extends KalturaAsset {
    captionParamsId: number;
    language: KalturaLanguage;
    readonly languageCode: KalturaLanguageCode;
    isDefault: KalturaNullableBoolean;
    label: string;
    format: KalturaCaptionType;
    readonly status: KalturaCaptionAssetStatus;
    parentId: string;
    accuracy: number;
    constructor(data?: KalturaCaptionAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
