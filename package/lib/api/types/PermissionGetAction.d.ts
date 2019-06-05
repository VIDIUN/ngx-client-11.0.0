import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermission } from './KalturaPermission';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionGetActionArgs extends KalturaRequestArgs {
    permissionName: string;
}
/**
 * Build request payload for service 'permission' action 'get'.
 *
 * Usage: Retrieves a permission object using its ID
 *
 * Server response type:         KalturaPermission
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionGetAction extends KalturaRequest<KalturaPermission> {
    permissionName: string;
    constructor(data: PermissionGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}