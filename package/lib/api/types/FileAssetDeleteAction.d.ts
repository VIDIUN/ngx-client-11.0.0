import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FileAssetDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'fileAsset' action 'delete'.
 *
 * Usage: Delete file asset by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class FileAssetDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: FileAssetDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}