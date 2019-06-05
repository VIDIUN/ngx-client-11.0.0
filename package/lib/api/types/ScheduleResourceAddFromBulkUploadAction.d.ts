import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadCsvJobData } from './KalturaBulkUploadCsvJobData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface ScheduleResourceAddFromBulkUploadActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
    bulkUploadData?: KalturaBulkUploadCsvJobData;
}
/**
 * Build request payload for service 'scheduleResource' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleResourceAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {
    fileData: File;
    bulkUploadData: KalturaBulkUploadCsvJobData;
    constructor(data: ScheduleResourceAddFromBulkUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
