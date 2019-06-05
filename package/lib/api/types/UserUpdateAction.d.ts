import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserUpdateActionArgs extends KalturaRequestArgs {
    userId: string;
    user: KalturaUser;
}
/**
 * Build request payload for service 'user' action 'update'.
 *
 * Usage: Updates an existing user object.
 * You can also use this action to update the userId
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export declare class UserUpdateAction extends KalturaRequest<KalturaUser> {
    userId: string;
    user: KalturaUser;
    constructor(data: UserUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}