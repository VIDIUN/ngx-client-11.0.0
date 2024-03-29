import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadToken } from './KalturaUploadToken';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UploadTokenGetActionArgs extends KalturaRequestArgs {
    uploadTokenId: string;
}
/**
 * Build request payload for service 'uploadToken' action 'get'.
 *
 * Usage: Get upload token by id
 *
 * Server response type:         KalturaUploadToken
 * Server failure response type: KalturaAPIException
 */
export declare class UploadTokenGetAction extends KalturaRequest<KalturaUploadToken> {
    uploadTokenId: string;
    constructor(data: UploadTokenGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
