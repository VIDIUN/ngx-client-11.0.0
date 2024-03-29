import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileContainer } from './KalturaFileContainer';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaCaptureThumbJobDataArgs extends KalturaJobDataArgs {
    fileContainer?: KalturaFileContainer;
    actualSrcFileSyncLocalPath?: string;
    srcFileSyncRemoteUrl?: string;
    thumbParamsOutputId?: number;
    thumbAssetId?: string;
    srcAssetId?: string;
    srcAssetType?: KalturaAssetType;
    thumbPath?: string;
}
export declare class KalturaCaptureThumbJobData extends KalturaJobData {
    fileContainer: KalturaFileContainer;
    actualSrcFileSyncLocalPath: string;
    srcFileSyncRemoteUrl: string;
    thumbParamsOutputId: number;
    thumbAssetId: string;
    srcAssetId: string;
    srcAssetType: KalturaAssetType;
    thumbPath: string;
    constructor(data?: KalturaCaptureThumbJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
