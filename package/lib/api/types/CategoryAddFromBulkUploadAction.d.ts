import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadCategoryData } from './KalturaBulkUploadCategoryData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface CategoryAddFromBulkUploadActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
    bulkUploadData?: KalturaBulkUploadJobData;
    bulkUploadCategoryData?: KalturaBulkUploadCategoryData;
}
/**
 * Build request payload for service 'category' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {
    fileData: File;
    bulkUploadData: KalturaBulkUploadJobData;
    bulkUploadCategoryData: KalturaBulkUploadCategoryData;
    constructor(data: CategoryAddFromBulkUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
