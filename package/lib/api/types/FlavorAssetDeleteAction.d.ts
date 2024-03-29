import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetDeleteActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'flavorAsset' action 'delete'.
 *
 * Usage: Delete Flavor Asset by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetDeleteAction extends KalturaRequest<void> {
    id: string;
    constructor(data: FlavorAssetDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
