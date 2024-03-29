import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetGetWebPlayableByEntryIdActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'flavorAsset' action 'getWebPlayableByEntryId'.
 *
 * Usage: Get web playable Flavor Assets for Entry
 *
 * Server response type:         KalturaFlavorAsset[]
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetGetWebPlayableByEntryIdAction extends KalturaRequest<KalturaFlavorAsset[]> {
    entryId: string;
    constructor(data: FlavorAssetGetWebPlayableByEntryIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
