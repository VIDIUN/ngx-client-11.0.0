import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
import { KalturaBulkUploadUserData } from './KalturaBulkUploadUserData';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface UserAddFromBulkUploadActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
    bulkUploadData?: KalturaBulkUploadJobData;
    bulkUploadUserData?: KalturaBulkUploadUserData;
}
/**
 * Build request payload for service 'user' action 'addFromBulkUpload'.
 *
 *
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export declare class UserAddFromBulkUploadAction extends KalturaUploadRequest<KalturaBulkUpload> {
    fileData: File;
    bulkUploadData: KalturaBulkUploadJobData;
    bulkUploadUserData: KalturaBulkUploadUserData;
    constructor(data: UserAddFromBulkUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
