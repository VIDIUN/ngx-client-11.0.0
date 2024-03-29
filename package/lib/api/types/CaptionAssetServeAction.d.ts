import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface CaptionAssetServeActionArgs extends KalturaFileRequestArgs {
    captionAssetId: string;
}
/**
 * Build request payload for service 'captionAsset' action 'serve'.
 *
 * Usage: Serves caption by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetServeAction extends KalturaFileRequest {
    captionAssetId: string;
    constructor(data: CaptionAssetServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
