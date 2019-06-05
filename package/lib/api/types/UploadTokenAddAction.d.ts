import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadToken } from './KalturaUploadToken';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UploadTokenAddActionArgs extends KalturaRequestArgs {
    uploadToken?: KalturaUploadToken;
}
/**
 * Build request payload for service 'uploadToken' action 'add'.
 *
 * Usage: Adds new upload token to upload a file
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 */
export declare class UploadTokenAddAction extends KalturaRequest<KalturaUploadToken> {
    uploadToken: KalturaUploadToken;
    constructor(data?: UploadTokenAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
