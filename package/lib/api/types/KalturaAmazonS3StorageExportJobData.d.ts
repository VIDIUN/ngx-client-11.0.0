import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAmazonS3StorageProfileFilesPermissionLevel } from './KalturaAmazonS3StorageProfileFilesPermissionLevel';
import { KalturaStorageExportJobData, KalturaStorageExportJobDataArgs } from './KalturaStorageExportJobData';
export interface KalturaAmazonS3StorageExportJobDataArgs extends KalturaStorageExportJobDataArgs {
    filesPermissionInS3?: KalturaAmazonS3StorageProfileFilesPermissionLevel;
    s3Region?: string;
    sseType?: string;
    sseKmsKeyId?: string;
    signatureType?: string;
    endPoint?: string;
}
export declare class KalturaAmazonS3StorageExportJobData extends KalturaStorageExportJobData {
    filesPermissionInS3: KalturaAmazonS3StorageProfileFilesPermissionLevel;
    s3Region: string;
    sseType: string;
    sseKmsKeyId: string;
    signatureType: string;
    endPoint: string;
    constructor(data?: KalturaAmazonS3StorageExportJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}