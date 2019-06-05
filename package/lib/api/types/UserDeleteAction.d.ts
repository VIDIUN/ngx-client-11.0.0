import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserDeleteActionArgs extends KalturaRequestArgs {
    userId: string;
}
/**
 * Build request payload for service 'user' action 'delete'.
 *
 * Usage: Deletes a user from a partner account
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export declare class UserDeleteAction extends KalturaRequest<KalturaUser> {
    userId: string;
    constructor(data: UserDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}