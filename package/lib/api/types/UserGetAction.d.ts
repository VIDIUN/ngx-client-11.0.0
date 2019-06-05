import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserGetActionArgs extends KalturaRequestArgs {
    userId?: string;
}
/**
 * Build request payload for service 'user' action 'get'.
 *
 * Usage: Retrieves a user object for a specified user ID
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export declare class UserGetAction extends KalturaRequest<KalturaUser> {
    userId: string;
    constructor(data?: UserGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
