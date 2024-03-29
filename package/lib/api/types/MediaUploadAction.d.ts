import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface MediaUploadActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
}
/**
 * Build request payload for service 'media' action 'upload'.
 *
 * Usage: Upload a media file to Kaltura, then the file can be used to create a media entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class MediaUploadAction extends KalturaUploadRequest<string> {
    fileData: File;
    constructor(data: MediaUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
