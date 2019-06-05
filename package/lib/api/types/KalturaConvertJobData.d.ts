import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDestFileSyncDescriptor } from './KalturaDestFileSyncDescriptor';
import { KalturaConvartableJobData, KalturaConvartableJobDataArgs } from './KalturaConvartableJobData';
export interface KalturaConvertJobDataArgs extends KalturaConvartableJobDataArgs {
    destFileSyncLocalPath?: string;
    destFileSyncRemoteUrl?: string;
    logFileSyncLocalPath?: string;
    logFileSyncRemoteUrl?: string;
    flavorAssetId?: string;
    remoteMediaId?: string;
    customData?: string;
    extraDestFileSyncs?: KalturaDestFileSyncDescriptor[];
    engineMessage?: string;
}
export declare class KalturaConvertJobData extends KalturaConvartableJobData {
    destFileSyncLocalPath: string;
    destFileSyncRemoteUrl: string;
    logFileSyncLocalPath: string;
    logFileSyncRemoteUrl: string;
    flavorAssetId: string;
    remoteMediaId: string;
    customData: string;
    extraDestFileSyncs: KalturaDestFileSyncDescriptor[];
    engineMessage: string;
    constructor(data?: KalturaConvertJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
