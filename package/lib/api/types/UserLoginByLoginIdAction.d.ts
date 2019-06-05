import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserLoginByLoginIdActionArgs extends KalturaRequestArgs {
    loginId: string;
    password: string;
    partnerId?: number;
    expiry?: number;
    privileges?: string;
    otp?: string;
}
/**
 * Build request payload for service 'user' action 'loginByLoginId'.
 *
 * Usage: Logs a user into a partner account with a user login ID and a user password
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class UserLoginByLoginIdAction extends KalturaRequest<string> {
    loginId: string;
    password: string;
    partnerId: number;
    expiry: number;
    privileges: string;
    otp: string;
    constructor(data: UserLoginByLoginIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}