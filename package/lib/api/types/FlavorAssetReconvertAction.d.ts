import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FlavorAssetReconvertActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'flavorAsset' action 'reconvert'.
 *
 * Usage: Reconvert Flavor Asset by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class FlavorAssetReconvertAction extends KalturaRequest<void> {
    id: string;
    constructor(data: FlavorAssetReconvertActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}