import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AttachmentAssetSetContentActionArgs extends KalturaRequestArgs {
    id: string;
    contentResource: KalturaContentResource;
}
/**
 * Build request payload for service 'attachmentAsset' action 'setContent'.
 *
 * Usage: Update content of attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 */
export declare class AttachmentAssetSetContentAction extends KalturaRequest<KalturaAttachmentAsset> {
    id: string;
    contentResource: KalturaContentResource;
    constructor(data: AttachmentAssetSetContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}