import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAsset } from './KalturaFileAsset';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FileAssetSetContentActionArgs extends KalturaRequestArgs {
    id: number;
    contentResource: KalturaContentResource;
}
/**
 * Build request payload for service 'fileAsset' action 'setContent'.
 *
 * Usage: Set content of file asset
 *
 * Server response type:         KalturaFileAsset
 * Server failure response type: KalturaAPIException
 */
export declare class FileAssetSetContentAction extends KalturaRequest<KalturaFileAsset> {
    id: number;
    contentResource: KalturaContentResource;
    constructor(data: FileAssetSetContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}