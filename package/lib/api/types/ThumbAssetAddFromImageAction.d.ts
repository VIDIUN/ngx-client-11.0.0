import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface ThumbAssetAddFromImageActionArgs extends KalturaUploadRequestArgs {
    entryId: string;
    fileData: File;
}
/**
 * Build request payload for service 'thumbAsset' action 'addFromImage'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetAddFromImageAction extends KalturaUploadRequest<KalturaThumbAsset> {
    entryId: string;
    fileData: File;
    constructor(data: ThumbAssetAddFromImageActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
