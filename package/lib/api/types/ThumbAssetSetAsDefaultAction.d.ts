import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetSetAsDefaultActionArgs extends KalturaRequestArgs {
    thumbAssetId: string;
}
/**
 * Build request payload for service 'thumbAsset' action 'setAsDefault'.
 *
 * Usage: Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetSetAsDefaultAction extends KalturaRequest<void> {
    thumbAssetId: string;
    constructor(data: ThumbAssetSetAsDefaultActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
