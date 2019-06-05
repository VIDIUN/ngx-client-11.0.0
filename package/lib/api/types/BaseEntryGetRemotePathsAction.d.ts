import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryGetRemotePathsActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'baseEntry' action 'getRemotePaths'.
 *
 * Usage: Get remote storage existing paths for the asset
 *
 * Server response type:         KalturaRemotePathListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {
    entryId: string;
    constructor(data: BaseEntryGetRemotePathsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
