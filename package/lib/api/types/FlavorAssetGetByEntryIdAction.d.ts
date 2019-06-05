import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetGetByEntryIdActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'flavorAsset' action 'getByEntryId'.
 *
 * Usage: Get Flavor Assets for Entry
 *
 * Server response type:         KalturaFlavorAsset[]
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetGetByEntryIdAction extends KalturaRequest<KalturaFlavorAsset[]> {
    entryId: string;
    constructor(data: FlavorAssetGetByEntryIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
