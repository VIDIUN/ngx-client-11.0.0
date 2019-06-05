import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAssetUrlOptions } from './KalturaFlavorAssetUrlOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetGetUrlActionArgs extends KalturaRequestArgs {
    id: string;
    storageId?: number;
    forceProxy?: boolean;
    options?: KalturaFlavorAssetUrlOptions;
}
/**
 * Build request payload for service 'flavorAsset' action 'getUrl'.
 *
 * Usage: Get download URL for the asset
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetGetUrlAction extends KalturaRequest<string> {
    id: string;
    storageId: number;
    forceProxy: boolean;
    options: KalturaFlavorAssetUrlOptions;
    constructor(data: FlavorAssetGetUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
