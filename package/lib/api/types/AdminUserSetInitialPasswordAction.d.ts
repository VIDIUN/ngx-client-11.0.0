import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AdminUserSetInitialPasswordActionArgs extends KalturaRequestArgs {
    hashKey: string;
    newPassword: string;
}
/**
 * Build request payload for service 'adminUser' action 'setInitialPassword'.
 *
 * Usage: Set initial users password
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class AdminUserSetInitialPasswordAction extends KalturaRequest<void> {
    hashKey: string;
    newPassword: string;
    constructor(data: AdminUserSetInitialPasswordActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
