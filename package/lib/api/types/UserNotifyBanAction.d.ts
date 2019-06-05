import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserNotifyBanActionArgs extends KalturaRequestArgs {
    userId: string;
}
/**
 * Build request payload for service 'user' action 'notifyBan'.
 *
 * Usage: Notifies that a user is banned from an account
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class UserNotifyBanAction extends KalturaRequest<void> {
    userId: string;
    constructor(data: UserNotifyBanActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
