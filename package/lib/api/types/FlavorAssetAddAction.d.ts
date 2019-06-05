import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetAddActionArgs extends KalturaRequestArgs {
    entryId: string;
    flavorAsset: KalturaFlavorAsset;
}
/**
 * Build request payload for service 'flavorAsset' action 'add'.
 *
 * Usage: Add flavor asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetAddAction extends KalturaRequest<KalturaFlavorAsset> {
    entryId: string;
    flavorAsset: KalturaFlavorAsset;
    constructor(data: FlavorAssetAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
