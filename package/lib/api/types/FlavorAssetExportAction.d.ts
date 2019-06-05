import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetExportActionArgs extends KalturaRequestArgs {
    assetId: string;
    storageProfileId: number;
}
/**
 * Build request payload for service 'flavorAsset' action 'export'.
 *
 * Usage: manually export an asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetExportAction extends KalturaRequest<KalturaFlavorAsset> {
    assetId: string;
    storageProfileId: number;
    constructor(data: FlavorAssetExportActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}