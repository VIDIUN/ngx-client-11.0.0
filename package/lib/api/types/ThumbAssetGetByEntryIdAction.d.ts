import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetGetByEntryIdActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'thumbAsset' action 'getByEntryId'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset[]
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetGetByEntryIdAction extends KalturaRequest<KalturaThumbAsset[]> {
    entryId: string;
    constructor(data: ThumbAssetGetByEntryIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
