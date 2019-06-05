import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AttachmentAssetGetRemotePathsActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'attachmentAsset' action 'getRemotePaths'.
 *
 * Usage: Get remote storage existing paths for the asset
 *
 * Server response type:         KalturaRemotePathListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class AttachmentAssetGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {
    id: string;
    constructor(data: AttachmentAssetGetRemotePathsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
