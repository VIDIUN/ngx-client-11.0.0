import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AttachmentAssetGetActionArgs extends KalturaRequestArgs {
    attachmentAssetId: string;
}
/**
 * Build request payload for service 'attachmentAsset' action 'get'.
 *
 *
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
export declare class AttachmentAssetGetAction extends KalturaRequest<KalturaAttachmentAsset> {
    attachmentAssetId: string;
    constructor(data: AttachmentAssetGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}