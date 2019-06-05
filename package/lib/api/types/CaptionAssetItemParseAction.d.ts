import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetItemParseActionArgs extends KalturaRequestArgs {
    captionAssetId: string;
}
/**
 * Build request payload for service 'captionAssetItem' action 'parse'.
 *
 * Usage: Parse content of caption asset and index it
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetItemParseAction extends KalturaRequest<void> {
    captionAssetId: string;
    constructor(data: CaptionAssetItemParseActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
