import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadCsvVersion } from './KalturaBulkUploadCsvVersion';
import { KalturaString } from './KalturaString';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';
export interface KalturaBulkUploadCsvJobDataArgs extends KalturaBulkUploadJobDataArgs {
    columns?: KalturaString[];
}
export declare class KalturaBulkUploadCsvJobData extends KalturaBulkUploadJobData {
    readonly csvVersion: KalturaBulkUploadCsvVersion;
    columns: KalturaString[];
    constructor(data?: KalturaBulkUploadCsvJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
