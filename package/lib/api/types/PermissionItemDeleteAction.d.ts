import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionItemDeleteActionArgs extends KalturaRequestArgs {
    permissionItemId: number;
}
/**
 * Build request payload for service 'permissionItem' action 'delete'.
 *
 * Usage: Deletes an existing permission item object.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionItemDeleteAction extends KalturaRequest<KalturaPermissionItem> {
    permissionItemId: number;
    constructor(data: PermissionItemDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}