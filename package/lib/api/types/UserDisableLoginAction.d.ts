import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserDisableLoginActionArgs extends KalturaRequestArgs {
    userId?: string;
    loginId?: string;
}
/**
 * Build request payload for service 'user' action 'disableLogin'.
 *
 * Usage: Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export declare class UserDisableLoginAction extends KalturaRequest<KalturaUser> {
    userId: string;
    loginId: string;
    constructor(data?: UserDisableLoginActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}