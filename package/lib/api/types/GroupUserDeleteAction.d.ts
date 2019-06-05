import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GroupUserDeleteActionArgs extends KalturaRequestArgs {
    userId: string;
    groupId: string;
}
/**
 * Build request payload for service 'groupUser' action 'delete'.
 *
 * Usage: delete by userId and groupId
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class GroupUserDeleteAction extends KalturaRequest<void> {
    userId: string;
    groupId: string;
    constructor(data: GroupUserDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}