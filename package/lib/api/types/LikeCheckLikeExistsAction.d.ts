import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LikeCheckLikeExistsActionArgs extends KalturaRequestArgs {
    entryId: string;
    userId?: string;
}
/**
 * Build request payload for service 'like' action 'checkLikeExists'.
 *
 *
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class LikeCheckLikeExistsAction extends KalturaRequest<boolean> {
    entryId: string;
    userId: string;
    constructor(data: LikeCheckLikeExistsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}