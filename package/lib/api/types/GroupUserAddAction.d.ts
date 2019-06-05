import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUser } from './KalturaGroupUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GroupUserAddActionArgs extends KalturaRequestArgs {
    groupUser: KalturaGroupUser;
}
/**
 * Build request payload for service 'groupUser' action 'add'.
 *
 * Usage: Add new GroupUser
 *
 * Server response type:         KalturaGroupUser
 * Server failure response type: KalturaAPIException
 */
export declare class GroupUserAddAction extends KalturaRequest<KalturaGroupUser> {
    groupUser: KalturaGroupUser;
    constructor(data: GroupUserAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}