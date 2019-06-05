import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FileAssetGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'fileAsset' action 'get'.
 *
 * Usage: Get file asset by id
 *
 * Server response type:         KalturaFileAsset
 * Server failure response type: KalturaAPIException
 */
export declare class FileAssetGetAction extends KalturaRequest<KalturaFileAsset> {
    id: number;
    constructor(data: FileAssetGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}