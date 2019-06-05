import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetExportActionArgs extends KalturaRequestArgs {
    assetId: string;
    storageProfileId: number;
}
/**
 * Build request payload for service 'thumbAsset' action 'export'.
 *
 * Usage: manually export an asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetExportAction extends KalturaRequest<KalturaFlavorAsset> {
    assetId: string;
    storageProfileId: number;
    constructor(data: ThumbAssetExportActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}