import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetGetUrlActionArgs extends KalturaRequestArgs {
    id: string;
    storageId?: number;
}
/**
 * Build request payload for service 'captionAsset' action 'getUrl'.
 *
 * Usage: Get download URL for the asset
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetGetUrlAction extends KalturaRequest<string> {
    id: string;
    storageId: number;
    constructor(data: CaptionAssetGetUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
