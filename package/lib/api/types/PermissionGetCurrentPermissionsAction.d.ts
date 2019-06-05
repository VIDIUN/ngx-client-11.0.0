import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionGetCurrentPermissionsActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'permission' action 'getCurrentPermissions'.
 *
 * Usage: Retrieves a list of permissions that apply to the current KS
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionGetCurrentPermissionsAction extends KalturaRequest<string> {
    constructor(data?: PermissionGetCurrentPermissionsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}