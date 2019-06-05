import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserRoleCloneActionArgs extends KalturaRequestArgs {
    userRoleId: number;
}
/**
 * Build request payload for service 'userRole' action 'clone'.
 *
 * Usage: Creates a new user role object that is a duplicate of an existing role
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
export declare class UserRoleCloneAction extends KalturaRequest<KalturaUserRole> {
    userRoleId: number;
    constructor(data: UserRoleCloneActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
