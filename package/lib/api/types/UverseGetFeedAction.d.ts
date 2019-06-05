import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface UverseGetFeedActionArgs extends KalturaFileRequestArgs {
    distributionProfileId: number;
    hash: string;
}
/**
 * Build request payload for service 'uverse' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class UverseGetFeedAction extends KalturaFileRequest {
    distributionProfileId: number;
    hash: string;
    constructor(data: UverseGetFeedActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
