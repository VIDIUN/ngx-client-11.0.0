import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserEnableLoginActionArgs extends KalturaRequestArgs {
    userId: string;
    loginId: string;
    password?: string;
}
/**
 * Build request payload for service 'user' action 'enableLogin'.
 *
 * Usage: Enables a user to log into a partner account using an email address and a password
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export declare class UserEnableLoginAction extends KalturaRequest<KalturaUser> {
    userId: string;
    loginId: string;
    password: string;
    constructor(data: UserEnableLoginActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}