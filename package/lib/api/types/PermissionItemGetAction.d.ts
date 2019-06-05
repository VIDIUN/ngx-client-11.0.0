import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionItemGetActionArgs extends KalturaRequestArgs {
    permissionItemId: number;
}
/**
 * Build request payload for service 'permissionItem' action 'get'.
 *
 * Usage: Retrieves a permission item object using its ID
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionItemGetAction extends KalturaRequest<KalturaPermissionItem> {
    permissionItemId: number;
    constructor(data: PermissionItemGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}