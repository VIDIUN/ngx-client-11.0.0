import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetAddActionArgs extends KalturaRequestArgs {
    entryId: string;
    captionAsset: KalturaCaptionAsset;
}
/**
 * Build request payload for service 'captionAsset' action 'add'.
 *
 * Usage: Add caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetAddAction extends KalturaRequest<KalturaCaptionAsset> {
    entryId: string;
    captionAsset: KalturaCaptionAsset;
    constructor(data: CaptionAssetAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
