import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetRegenerateActionArgs extends KalturaRequestArgs {
    thumbAssetId: string;
}
/**
 * Build request payload for service 'thumbAsset' action 'regenerate'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetRegenerateAction extends KalturaRequest<KalturaThumbAsset> {
    thumbAssetId: string;
    constructor(data: ThumbAssetRegenerateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}