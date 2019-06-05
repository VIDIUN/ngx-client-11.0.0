import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserSetInitialPasswordActionArgs extends KalturaRequestArgs {
    hashKey: string;
    newPassword: string;
}
/**
 * Build request payload for service 'user' action 'setInitialPassword'.
 *
 * Usage: Set initial users password
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class UserSetInitialPasswordAction extends KalturaRequest<void> {
    hashKey: string;
    newPassword: string;
    constructor(data: UserSetInitialPasswordActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
