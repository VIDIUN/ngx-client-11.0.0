import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionUpdateActionArgs extends KalturaRequestArgs {
    permissionName: string;
    permission: KalturaPermission;
}
/**
 * Build request payload for service 'permission' action 'update'.
 *
 * Usage: Updates an existing permission object
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionUpdateAction extends KalturaRequest<KalturaPermission> {
    permissionName: string;
    permission: KalturaPermission;
    constructor(data: PermissionUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
