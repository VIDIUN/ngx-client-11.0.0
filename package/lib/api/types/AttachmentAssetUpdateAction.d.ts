import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AttachmentAssetUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    attachmentAsset: KalturaAttachmentAsset;
}
/**
 * Build request payload for service 'attachmentAsset' action 'update'.
 *
 * Usage: Update attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
export declare class AttachmentAssetUpdateAction extends KalturaRequest<KalturaAttachmentAsset> {
    id: string;
    attachmentAsset: KalturaAttachmentAsset;
    constructor(data: AttachmentAssetUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
