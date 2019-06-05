import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAdminUser } from './KalturaAdminUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AdminUserUpdatePasswordActionArgs extends KalturaRequestArgs {
    email: string;
    password: string;
    newEmail?: string;
    newPassword?: string;
}
/**
 * Build request payload for service 'adminUser' action 'updatePassword'.
 *
 * Usage: Update admin user password and email
 *
 * Server response type:         KalturaAdminUser
 * Server failure response type: KalturaAPIException
 */
export declare class AdminUserUpdatePasswordAction extends KalturaRequest<KalturaAdminUser> {
    email: string;
    password: string;
    newEmail: string;
    newPassword: string;
    constructor(data: AdminUserUpdatePasswordActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
