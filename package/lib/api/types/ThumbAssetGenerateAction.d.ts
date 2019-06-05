import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetGenerateActionArgs extends KalturaRequestArgs {
    entryId: string;
    thumbParams: KalturaThumbParams;
    sourceAssetId?: string;
}
/**
 * Build request payload for service 'thumbAsset' action 'generate'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetGenerateAction extends KalturaRequest<KalturaThumbAsset> {
    entryId: string;
    thumbParams: KalturaThumbParams;
    sourceAssetId: string;
    constructor(data: ThumbAssetGenerateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}