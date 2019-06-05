import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface BulkUploadAddActionArgs extends KalturaUploadRequestArgs {
    conversionProfileId: number;
    csvFileData: File;
    bulkUploadType?: KalturaBulkUploadType;
    uploadedBy?: string;
    fileName?: string;
}
/**
 * Build request payload for service 'bulkUpload' action 'add'.
 *
 * Usage: Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class BulkUploadAddAction extends KalturaUploadRequest<KalturaBulkUpload> {
    conversionProfileId: number;
    csvFileData: File;
    bulkUploadType: KalturaBulkUploadType;
    uploadedBy: string;
    fileName: string;
    constructor(data: BulkUploadAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}