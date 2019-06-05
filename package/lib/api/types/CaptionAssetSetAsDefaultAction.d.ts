import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetSetAsDefaultActionArgs extends KalturaRequestArgs {
    captionAssetId: string;
}
/**
 * Build request payload for service 'captionAsset' action 'setAsDefault'.
 *
 * Usage: Markss the caption as default and removes that mark from all other caption assets of the entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetSetAsDefaultAction extends KalturaRequest<void> {
    captionAssetId: string;
    constructor(data: CaptionAssetSetAsDefaultActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}