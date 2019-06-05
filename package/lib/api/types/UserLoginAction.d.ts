import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserLoginActionArgs extends KalturaRequestArgs {
    partnerId: number;
    userId: string;
    password: string;
    expiry?: number;
    privileges?: string;
}
/**
 * Build request payload for service 'user' action 'login'.
 *
 * Usage: Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class UserLoginAction extends KalturaRequest<string> {
    partnerId: number;
    userId: string;
    password: string;
    expiry: number;
    privileges: string;
    constructor(data: UserLoginActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
