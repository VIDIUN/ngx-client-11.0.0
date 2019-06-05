import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface CaptionAssetServeByEntryIdActionArgs extends KalturaFileRequestArgs {
    entryId: string;
    captionParamId?: number;
}
/**
 * Build request payload for service 'captionAsset' action 'serveByEntryId'.
 *
 * Usage: Serves caption by entry id and thumnail params id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetServeByEntryIdAction extends KalturaFileRequest {
    entryId: string;
    captionParamId: number;
    constructor(data: CaptionAssetServeByEntryIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}