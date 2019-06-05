import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AttachmentAssetAddActionArgs extends KalturaRequestArgs {
    entryId: string;
    attachmentAsset: KalturaAttachmentAsset;
}
/**
 * Build request payload for service 'attachmentAsset' action 'add'.
 *
 * Usage: Add attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
export declare class AttachmentAssetAddAction extends KalturaRequest<KalturaAttachmentAsset> {
    entryId: string;
    attachmentAsset: KalturaAttachmentAsset;
    constructor(data: AttachmentAssetAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}