import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'flavorAsset' action 'get'.
 *
 * Usage: Get Flavor Asset by ID
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetGetAction extends KalturaRequest<KalturaFlavorAsset> {
    id: string;
    constructor(data: FlavorAssetGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
