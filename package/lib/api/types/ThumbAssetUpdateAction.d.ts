import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    thumbAsset: KalturaThumbAsset;
}
/**
 * Build request payload for service 'thumbAsset' action 'update'.
 *
 * Usage: Update thumbnail asset
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetUpdateAction extends KalturaRequest<KalturaThumbAsset> {
    id: string;
    thumbAsset: KalturaThumbAsset;
    constructor(data: ThumbAssetUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}