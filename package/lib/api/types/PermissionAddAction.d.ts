import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionAddActionArgs extends KalturaRequestArgs {
    permission: KalturaPermission;
}
/**
 * Build request payload for service 'permission' action 'add'.
 *
 * Usage: Adds a new permission object to the account
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionAddAction extends KalturaRequest<KalturaPermission> {
    permission: KalturaPermission;
    constructor(data: PermissionAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
