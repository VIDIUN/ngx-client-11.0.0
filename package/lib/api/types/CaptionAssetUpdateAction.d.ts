import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    captionAsset: KalturaCaptionAsset;
}
/**
 * Build request payload for service 'captionAsset' action 'update'.
 *
 * Usage: Update caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetUpdateAction extends KalturaRequest<KalturaCaptionAsset> {
    id: string;
    captionAsset: KalturaCaptionAsset;
    constructor(data: CaptionAssetUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
