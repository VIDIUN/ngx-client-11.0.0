import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface SynacorHboGetFeedActionArgs extends KalturaFileRequestArgs {
    distributionProfileId: number;
    hash: string;
}
/**
 * Build request payload for service 'synacorHbo' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class SynacorHboGetFeedAction extends KalturaFileRequest {
    distributionProfileId: number;
    hash: string;
    constructor(data: SynacorHboGetFeedActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
