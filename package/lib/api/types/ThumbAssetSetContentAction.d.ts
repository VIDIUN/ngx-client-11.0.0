import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetSetContentActionArgs extends KalturaRequestArgs {
    id: string;
    contentResource: KalturaContentResource;
}
/**
 * Build request payload for service 'thumbAsset' action 'setContent'.
 *
 * Usage: Update content of thumbnail asset
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetSetContentAction extends KalturaRequest<KalturaThumbAsset> {
    id: string;
    contentResource: KalturaContentResource;
    constructor(data: ThumbAssetSetContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
