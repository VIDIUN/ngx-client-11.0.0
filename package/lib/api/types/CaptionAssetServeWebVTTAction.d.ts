import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface CaptionAssetServeWebVTTActionArgs extends KalturaFileRequestArgs {
    captionAssetId: string;
    segmentDuration?: number;
    segmentIndex?: number;
    localTimestamp?: number;
}
/**
 * Build request payload for service 'captionAsset' action 'serveWebVTT'.
 *
 * Usage: Serves caption by its id converting it to segmented WebVTT
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetServeWebVTTAction extends KalturaFileRequest {
    captionAssetId: string;
    segmentDuration: number;
    segmentIndex: number;
    localTimestamp: number;
    constructor(data: CaptionAssetServeWebVTTActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
