import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentServeOptions } from './KalturaAttachmentServeOptions';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface AttachmentAssetServeActionArgs extends KalturaFileRequestArgs {
    attachmentAssetId: string;
    serveOptions?: KalturaAttachmentServeOptions;
}
/**
 * Build request payload for service 'attachmentAsset' action 'serve'.
 *
 * Usage: Serves attachment by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class AttachmentAssetServeAction extends KalturaFileRequest {
    attachmentAssetId: string;
    serveOptions: KalturaAttachmentServeOptions;
    constructor(data: AttachmentAssetServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
