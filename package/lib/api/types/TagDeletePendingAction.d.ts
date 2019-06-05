import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface TagDeletePendingActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'tag' action 'deletePending'.
 *
 * Usage: Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class TagDeletePendingAction extends KalturaRequest<number> {
    constructor(data?: TagDeletePendingActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}