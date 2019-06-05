import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LikeLikeActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'like' action 'like'.
 *
 *
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class LikeLikeAction extends KalturaRequest<boolean> {
    entryId: string;
    constructor(data: LikeLikeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
