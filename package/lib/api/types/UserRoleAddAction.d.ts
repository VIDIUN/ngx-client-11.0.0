import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserRoleAddActionArgs extends KalturaRequestArgs {
    userRole: KalturaUserRole;
}
/**
 * Build request payload for service 'userRole' action 'add'.
 *
 * Usage: Adds a new user role object to the account
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
export declare class UserRoleAddAction extends KalturaRequest<KalturaUserRole> {
    userRole: KalturaUserRole;
    constructor(data: UserRoleAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
