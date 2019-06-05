import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadICalJobData } from './KalturaBulkUploadICalJobData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface ScheduleEventAddFromBulkUploadActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
    bulkUploadData?: KalturaBulkUploadICalJobData;
}
/**
 * Build request payload for service 'scheduleEvent' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {
    fileData: File;
    bulkUploadData: KalturaBulkUploadICalJobData;
    constructor(data: ScheduleEventAddFromBulkUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
