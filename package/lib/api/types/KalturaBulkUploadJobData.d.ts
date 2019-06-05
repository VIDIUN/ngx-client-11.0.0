import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaBulkUploadObjectData } from './KalturaBulkUploadObjectData';
import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaBulkUploadJobDataArgs extends KalturaJobDataArgs {
    fileName?: string;
    emailRecipients?: string;
    numOfErrorObjects?: number;
}
export declare class KalturaBulkUploadJobData extends KalturaJobData {
    readonly userId: string;
    readonly uploadedBy: string;
    readonly conversionProfileId: number;
    readonly resultsFileLocalPath: string;
    readonly resultsFileUrl: string;
    readonly numOfEntries: number;
    readonly numOfObjects: number;
    readonly filePath: string;
    readonly bulkUploadObjectType: KalturaBulkUploadObjectType;
    fileName: string;
    readonly objectData: KalturaBulkUploadObjectData;
    readonly type: KalturaBulkUploadType;
    emailRecipients: string;
    numOfErrorObjects: number;
    constructor(data?: KalturaBulkUploadJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}