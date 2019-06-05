import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface FileAssetServeActionArgs extends KalturaFileRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'fileAsset' action 'serve'.
 *
 * Usage: Serve file asset by id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class FileAssetServeAction extends KalturaFileRequest {
    id: number;
    constructor(data: FileAssetServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}