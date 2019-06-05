import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbAssetGetRemotePathsActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'thumbAsset' action 'getRemotePaths'.
 *
 * Usage: Get remote storage existing paths for the asset
 *
 * Server response type:         KalturaRemotePathListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbAssetGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {
    id: string;
    constructor(data: ThumbAssetGetRemotePathsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}