import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface UploadUploadActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
}
/**
 * Build request payload for service 'upload' action 'upload'.
 *
 *
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class UploadUploadAction extends KalturaUploadRequest<string> {
    fileData: File;
    constructor(data: UploadUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}