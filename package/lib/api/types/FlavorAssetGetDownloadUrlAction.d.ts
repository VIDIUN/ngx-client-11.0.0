import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetGetDownloadUrlActionArgs extends KalturaRequestArgs {
    id: string;
    useCdn?: boolean;
}
/**
 * Build request payload for service 'flavorAsset' action 'getDownloadUrl'.
 *
 * Usage: Get download URL for the Flavor Asset
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetGetDownloadUrlAction extends KalturaRequest<string> {
    id: string;
    useCdn: boolean;
    constructor(data: FlavorAssetGetDownloadUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
