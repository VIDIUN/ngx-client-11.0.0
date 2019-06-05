import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface BaseEntryUploadActionArgs extends KalturaUploadRequestArgs {
    fileData: File;
}
/**
 * Build request payload for service 'baseEntry' action 'upload'.
 *
 * Usage: Upload a file to Kaltura, that can be used to create an entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryUploadAction extends KalturaUploadRequest<string> {
    fileData: File;
    constructor(data: BaseEntryUploadActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}