import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FileAssetAddActionArgs extends KalturaRequestArgs {
    fileAsset: KalturaFileAsset;
}
/**
 * Build request payload for service 'fileAsset' action 'add'.
 *
 * Usage: Add new file asset
 *
 * Server response type:         KalturaFileAsset
 * Server failure response type: KalturaAPIException
 */
export declare class FileAssetAddAction extends KalturaRequest<KalturaFileAsset> {
    fileAsset: KalturaFileAsset;
    constructor(data: FileAssetAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}