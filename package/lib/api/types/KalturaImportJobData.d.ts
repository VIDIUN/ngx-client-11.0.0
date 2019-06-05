import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaImportJobDataArgs extends KalturaJobDataArgs {
    srcFileUrl?: string;
    destFileLocalPath?: string;
    flavorAssetId?: string;
    fileSize?: number;
}
export declare class KalturaImportJobData extends KalturaJobData {
    srcFileUrl: string;
    destFileLocalPath: string;
    flavorAssetId: string;
    fileSize: number;
    constructor(data?: KalturaImportJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
