import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    flavorAsset: KalturaFlavorAsset;
}
/**
 * Build request payload for service 'flavorAsset' action 'update'.
 *
 * Usage: Update flavor asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetUpdateAction extends KalturaRequest<KalturaFlavorAsset> {
    id: string;
    flavorAsset: KalturaFlavorAsset;
    constructor(data: FlavorAssetUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}