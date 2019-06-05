import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserAddActionArgs extends KalturaRequestArgs {
    user: KalturaUser;
}
/**
 * Build request payload for service 'user' action 'add'.
 *
 * Usage: Adds a new user to an existing account in the Kaltura database.
 * Input param $id is the unique identifier in the partner's system
 *
 * Server response type:         KalturaUser
 * Server failure response type: KalturaAPIException
 */
export declare class UserAddAction extends KalturaRequest<KalturaUser> {
    user: KalturaUser;
    constructor(data: UserAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}