import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetGenerateByEntryIdActionArgs extends KalturaRequestArgs {
    entryId: string;
    destThumbParamsId: number;
}
/**
 * Build request payload for service 'thumbAsset' action 'generateByEntryId'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetGenerateByEntryIdAction extends KalturaRequest<KalturaThumbAsset> {
    entryId: string;
    destThumbParamsId: number;
    constructor(data: ThumbAssetGenerateByEntryIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
