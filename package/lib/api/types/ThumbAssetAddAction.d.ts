import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetAddActionArgs extends KalturaRequestArgs {
    entryId: string;
    thumbAsset: KalturaThumbAsset;
}
/**
 * Build request payload for service 'thumbAsset' action 'add'.
 *
 * Usage: Add thumbnail asset
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetAddAction extends KalturaRequest<KalturaThumbAsset> {
    entryId: string;
    thumbAsset: KalturaThumbAsset;
    constructor(data: ThumbAssetAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
