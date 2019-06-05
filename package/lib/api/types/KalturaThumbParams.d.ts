import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbCropType } from './KalturaThumbCropType';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams, KalturaAssetParamsArgs } from './KalturaAssetParams';
export interface KalturaThumbParamsArgs extends KalturaAssetParamsArgs {
    cropType?: KalturaThumbCropType;
    quality?: number;
    cropX?: number;
    cropY?: number;
    cropWidth?: number;
    cropHeight?: number;
    videoOffset?: number;
    width?: number;
    height?: number;
    scaleWidth?: number;
    scaleHeight?: number;
    backgroundColor?: string;
    sourceParamsId?: number;
    format?: KalturaContainerFormat;
    density?: number;
    stripProfiles?: boolean;
    videoOffsetInPercentage?: number;
}
export declare class KalturaThumbParams extends KalturaAssetParams {
    cropType: KalturaThumbCropType;
    quality: number;
    cropX: number;
    cropY: number;
    cropWidth: number;
    cropHeight: number;
    videoOffset: number;
    width: number;
    height: number;
    scaleWidth: number;
    scaleHeight: number;
    backgroundColor: string;
    sourceParamsId: number;
    format: KalturaContainerFormat;
    density: number;
    stripProfiles: boolean;
    videoOffsetInPercentage: number;
    constructor(data?: KalturaThumbParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
