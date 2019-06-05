import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetSetContentActionArgs extends KalturaRequestArgs {
    id: string;
    contentResource: KalturaContentResource;
}
/**
 * Build request payload for service 'captionAsset' action 'setContent'.
 *
 * Usage: Update content of caption asset
 *
 * Server response type:         KalturaCaptionAsset
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetSetContentAction extends KalturaRequest<KalturaCaptionAsset> {
    id: string;
    contentResource: KalturaContentResource;
    constructor(data: CaptionAssetSetContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
