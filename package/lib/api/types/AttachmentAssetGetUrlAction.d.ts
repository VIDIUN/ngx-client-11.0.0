import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AttachmentAssetGetUrlActionArgs extends KalturaRequestArgs {
    id: string;
    storageId?: number;
}
/**
 * Build request payload for service 'attachmentAsset' action 'getUrl'.
 *
 * Usage: Get download URL for the asset
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class AttachmentAssetGetUrlAction extends KalturaRequest<string> {
    id: string;
    storageId: number;
    constructor(data: AttachmentAssetGetUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}