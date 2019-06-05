import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionAssetGetRemotePathsActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'captionAsset' action 'getRemotePaths'.
 *
 * Usage: Get remote storage existing paths for the asset
 *
 * Server response type:         KalturaRemotePathListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionAssetGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {
    id: string;
    constructor(data: CaptionAssetGetRemotePathsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
