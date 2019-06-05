import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetAddFromUrlActionArgs extends KalturaRequestArgs {
    entryId: string;
    url: string;
}
/**
 * Build request payload for service 'thumbAsset' action 'addFromUrl'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetAddFromUrlAction extends KalturaRequest<KalturaThumbAsset> {
    entryId: string;
    url: string;
    constructor(data: ThumbAssetAddFromUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}