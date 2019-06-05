import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetGetActionArgs extends KalturaRequestArgs {
    captionAssetId: string;
}
/**
 * Build request payload for service 'captionAsset' action 'get'.
 *
 *
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetGetAction extends KalturaRequest<KalturaCaptionAsset> {
    captionAssetId: string;
    constructor(data: CaptionAssetGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}