import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadResponse } from './KalturaUploadResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UploadGetUploadedFileTokenByFileNameActionArgs extends KalturaRequestArgs {
    fileName: string;
}
/**
 * Build request payload for service 'upload' action 'getUploadedFileTokenByFileName'.
 *
 *
 *
 * Server response type:         KalturaUploadResponse
 * Server failure response type: KalturaAPIException
 */
export declare class UploadGetUploadedFileTokenByFileNameAction extends KalturaRequest<KalturaUploadResponse> {
    fileName: string;
    constructor(data: UploadGetUploadedFileTokenByFileNameActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}