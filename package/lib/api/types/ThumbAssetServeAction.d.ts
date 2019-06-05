import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaThumbnailServeOptions } from './KalturaThumbnailServeOptions';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface ThumbAssetServeActionArgs extends KalturaFileRequestArgs {
    thumbAssetId: string;
    version?: number;
    thumbParams?: KalturaThumbParams;
    options?: KalturaThumbnailServeOptions;
}
/**
 * Build request payload for service 'thumbAsset' action 'serve'.
 *
 * Usage: Serves thumbnail by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetServeAction extends KalturaFileRequest {
    thumbAssetId: string;
    version: number;
    thumbParams: KalturaThumbParams;
    options: KalturaThumbnailServeOptions;
    constructor(data: ThumbAssetServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}