import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface TimeWarnerGetFeedActionArgs extends KalturaFileRequestArgs {
    distributionProfileId: number;
    hash: string;
}
/**
 * Build request payload for service 'timeWarner' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class TimeWarnerGetFeedAction extends KalturaFileRequest {
    distributionProfileId: number;
    hash: string;
    constructor(data: TimeWarnerGetFeedActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}