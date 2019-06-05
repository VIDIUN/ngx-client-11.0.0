import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetSetAsSourceActionArgs extends KalturaRequestArgs {
    assetId: string;
}
/**
 * Build request payload for service 'flavorAsset' action 'setAsSource'.
 *
 * Usage: Set a given flavor as the original flavor
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetSetAsSourceAction extends KalturaRequest<void> {
    assetId: string;
    constructor(data: FlavorAssetSetAsSourceActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}