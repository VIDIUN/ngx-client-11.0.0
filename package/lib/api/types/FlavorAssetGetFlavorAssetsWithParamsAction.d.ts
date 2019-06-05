import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetWithParams } from './KalturaFlavorAssetWithParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetGetFlavorAssetsWithParamsActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'flavorAsset' action 'getFlavorAssetsWithParams'.
 *
 * Usage: Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *
 * Server response type:         KalturaFlavorAssetWithParams[]
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetGetFlavorAssetsWithParamsAction extends KalturaRequest<KalturaFlavorAssetWithParams[]> {
    entryId: string;
    constructor(data: FlavorAssetGetFlavorAssetsWithParamsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}