import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetDeleteLocalContentActionArgs extends KalturaRequestArgs {
    assetId: string;
}
/**
 * Build request payload for service 'flavorAsset' action 'deleteLocalContent'.
 *
 * Usage: delete all local file syncs for this asset
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetDeleteLocalContentAction extends KalturaRequest<void> {
    assetId: string;
    constructor(data: FlavorAssetDeleteLocalContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}