import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserRoleDeleteActionArgs extends KalturaRequestArgs {
    userRoleId: number;
}
/**
 * Build request payload for service 'userRole' action 'delete'.
 *
 * Usage: Deletes an existing user role object
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
export declare class UserRoleDeleteAction extends KalturaRequest<KalturaUserRole> {
    userRoleId: number;
    constructor(data: UserRoleDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}