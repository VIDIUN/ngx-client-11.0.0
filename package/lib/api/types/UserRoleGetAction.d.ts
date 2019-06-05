import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserRoleGetActionArgs extends KalturaRequestArgs {
    userRoleId: number;
}
/**
 * Build request payload for service 'userRole' action 'get'.
 *
 * Usage: Retrieves a user role object using its ID
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 */
export declare class UserRoleGetAction extends KalturaRequest<KalturaUserRole> {
    userRoleId: number;
    constructor(data: UserRoleGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
