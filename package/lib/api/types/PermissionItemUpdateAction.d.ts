import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionItemUpdateActionArgs extends KalturaRequestArgs {
    permissionItemId: number;
    permissionItem: KalturaPermissionItem;
}
/**
 * Build request payload for service 'permissionItem' action 'update'.
 *
 * Usage: Updates an existing permission item object.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionItemUpdateAction extends KalturaRequest<KalturaPermissionItem> {
    permissionItemId: number;
    permissionItem: KalturaPermissionItem;
    constructor(data: PermissionItemUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
