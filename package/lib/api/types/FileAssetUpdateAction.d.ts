import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FileAssetUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    fileAsset: KalturaFileAsset;
}
/**
 * Build request payload for service 'fileAsset' action 'update'.
 *
 * Usage: Update file asset by id
 *
 * Server response type:         KalturaFileAsset
 * Server failure response type: KalturaAPIException
 */
export declare class FileAssetUpdateAction extends KalturaRequest<KalturaFileAsset> {
    id: number;
    fileAsset: KalturaFileAsset;
    constructor(data: FileAssetUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
