import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionDeleteActionArgs extends KalturaRequestArgs {
    permissionName: string;
}
/**
 * Build request payload for service 'permission' action 'delete'.
 *
 * Usage: Deletes an existing permission object
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionDeleteAction extends KalturaRequest<KalturaPermission> {
    permissionName: string;
    constructor(data: PermissionDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
