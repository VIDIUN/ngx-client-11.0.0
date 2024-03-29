import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface UverseClickToOrderGetFeedActionArgs extends KalturaFileRequestArgs {
    distributionProfileId: number;
    hash: string;
}
/**
 * Build request payload for service 'uverseClickToOrder' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class UverseClickToOrderGetFeedAction extends KalturaFileRequest {
    distributionProfileId: number;
    hash: string;
    constructor(data: UverseClickToOrderGetFeedActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
