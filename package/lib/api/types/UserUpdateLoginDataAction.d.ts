import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserUpdateLoginDataActionArgs extends KalturaRequestArgs {
    oldLoginId: string;
    password: string;
    newLoginId?: string;
    newPassword?: string;
    newFirstName?: string;
    newLastName?: string;
}
/**
 * Build request payload for service 'user' action 'updateLoginData'.
 *
 * Usage: Updates a user's login data: email, password, name
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class UserUpdateLoginDataAction extends KalturaRequest<void> {
    oldLoginId: string;
    password: string;
    newLoginId: string;
    newPassword: string;
    newFirstName: string;
    newLastName: string;
    constructor(data: UserUpdateLoginDataActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}