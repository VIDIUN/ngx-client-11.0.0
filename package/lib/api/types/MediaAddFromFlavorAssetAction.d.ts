import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaAddFromFlavorAssetActionArgs extends KalturaRequestArgs {
    sourceFlavorAssetId: string;
    mediaEntry?: KalturaMediaEntry;
}
/**
 * Build request payload for service 'media' action 'addFromFlavorAsset'.
 *
 * Usage: Copy flavor asset into new entry
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaAddFromFlavorAssetAction extends KalturaRequest<KalturaMediaEntry> {
    sourceFlavorAssetId: string;
    mediaEntry: KalturaMediaEntry;
    constructor(data: MediaAddFromFlavorAssetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}