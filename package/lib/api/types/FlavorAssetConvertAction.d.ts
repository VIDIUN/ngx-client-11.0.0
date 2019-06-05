import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetConvertActionArgs extends KalturaRequestArgs {
    entryId: string;
    flavorParamsId: number;
    priority?: number;
}
/**
 * Build request payload for service 'flavorAsset' action 'convert'.
 *
 * Usage: Add and convert new Flavor Asset for Entry with specific Flavor Params
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetConvertAction extends KalturaRequest<void> {
    entryId: string;
    flavorParamsId: number;
    priority: number;
    constructor(data: FlavorAssetConvertActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
