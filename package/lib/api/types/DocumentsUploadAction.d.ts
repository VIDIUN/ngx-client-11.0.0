import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface DocumentsUploadActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
}
/**
 * Build request payload for service 'documents' action 'upload'.
 *
 * Usage: Upload a document file to Kaltura, then the file can be used to create a document entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class DocumentsUploadAction extends KalturaUploadRequest<string> {
    fileData: File;
    constructor(data: DocumentsUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}