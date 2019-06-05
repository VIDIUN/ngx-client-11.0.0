import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConvartableJobData, KalturaConvartableJobDataArgs } from './KalturaConvartableJobData';
export interface KalturaPostConvertJobDataArgs extends KalturaConvartableJobDataArgs {
    flavorAssetId?: string;
    createThumb?: boolean;
    thumbPath?: string;
    thumbOffset?: number;
    thumbHeight?: number;
    thumbBitrate?: number;
    customData?: string;
}
export declare class KalturaPostConvertJobData extends KalturaConvartableJobData {
    flavorAssetId: string;
    createThumb: boolean;
    thumbPath: string;
    thumbOffset: number;
    thumbHeight: number;
    thumbBitrate: number;
    customData: string;
    constructor(data?: KalturaPostConvertJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
