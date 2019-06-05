import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetDeleteActionArgs extends KalturaRequestArgs {
    thumbAssetId: string;
}
/**
 * Build request payload for service 'thumbAsset' action 'delete'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetDeleteAction extends KalturaRequest<void> {
    thumbAssetId: string;
    constructor(data: ThumbAssetDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
