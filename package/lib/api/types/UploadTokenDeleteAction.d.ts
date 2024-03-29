import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UploadTokenDeleteActionArgs extends KalturaRequestArgs {
    uploadTokenId: string;
}
/**
 * Build request payload for service 'uploadToken' action 'delete'.
 *
 * Usage: Deletes the upload token by upload token id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class UploadTokenDeleteAction extends KalturaRequest<void> {
    uploadTokenId: string;
    constructor(data: UploadTokenDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
