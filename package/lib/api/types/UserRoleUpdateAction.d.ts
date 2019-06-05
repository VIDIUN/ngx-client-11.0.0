import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserRoleUpdateActionArgs extends KalturaRequestArgs {
    userRoleId: number;
    userRole: KalturaUserRole;
}
/**
 * Build request payload for service 'userRole' action 'update'.
 *
 * Usage: Updates an existing user role object
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
export declare class UserRoleUpdateAction extends KalturaRequest<KalturaUserRole> {
    userRoleId: number;
    userRole: KalturaUserRole;
    constructor(data: UserRoleUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
