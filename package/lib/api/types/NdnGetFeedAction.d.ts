import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface NdnGetFeedActionArgs extends KalturaFileRequestArgs {
    distributionProfileId: number;
    hash: string;
}
/**
 * Build request payload for service 'ndn' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class NdnGetFeedAction extends KalturaFileRequest {
    distributionProfileId: number;
    hash: string;
    constructor(data: NdnGetFeedActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
