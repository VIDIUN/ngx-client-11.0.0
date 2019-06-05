import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AdminUserResetPasswordActionArgs extends KalturaRequestArgs {
    email: string;
}
/**
 * Build request payload for service 'adminUser' action 'resetPassword'.
 *
 * Usage: Reset admin user password and send it to the users email address
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class AdminUserResetPasswordAction extends KalturaRequest<void> {
    email: string;
    constructor(data: AdminUserResetPasswordActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}