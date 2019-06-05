import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AttachmentAssetDeleteActionArgs extends KalturaRequestArgs {
    attachmentAssetId: string;
}
/**
 * Build request payload for service 'attachmentAsset' action 'delete'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class AttachmentAssetDeleteAction extends KalturaRequest<void> {
    attachmentAssetId: string;
    constructor(data: AttachmentAssetDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
