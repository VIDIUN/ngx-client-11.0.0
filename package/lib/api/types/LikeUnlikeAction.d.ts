import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LikeUnlikeActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'like' action 'unlike'.
 *
 *
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class LikeUnlikeAction extends KalturaRequest<boolean> {
    entryId: string;
    constructor(data: LikeUnlikeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
