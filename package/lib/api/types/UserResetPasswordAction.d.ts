import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserResetPasswordActionArgs extends KalturaRequestArgs {
    email: string;
}
/**
 * Build request payload for service 'user' action 'resetPassword'.
 *
 * Usage: Reset user's password and send the user an email to generate a new one
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class UserResetPasswordAction extends KalturaRequest<void> {
    email: string;
    constructor(data: UserResetPasswordActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
