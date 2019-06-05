import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadCategoryUserData } from './KalturaBulkUploadCategoryUserData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface CategoryUserAddFromBulkUploadActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
    bulkUploadData?: KalturaBulkUploadJobData;
    bulkUploadCategoryUserData?: KalturaBulkUploadCategoryUserData;
}
/**
 * Build request payload for service 'categoryUser' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {
    fileData: File;
    bulkUploadData: KalturaBulkUploadJobData;
    bulkUploadCategoryUserData: KalturaBulkUploadCategoryUserData;
    constructor(data: CategoryUserAddFromBulkUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}