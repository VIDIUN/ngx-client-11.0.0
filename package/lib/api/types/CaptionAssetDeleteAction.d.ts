import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetDeleteActionArgs extends KalturaRequestArgs {
    captionAssetId: string;
}
/**
 * Build request payload for service 'captionAsset' action 'delete'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetDeleteAction extends KalturaRequest<void> {
    captionAssetId: string;
    constructor(data: CaptionAssetDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
