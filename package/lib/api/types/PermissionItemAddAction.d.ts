import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionItemAddActionArgs extends KalturaRequestArgs {
    permissionItem: KalturaPermissionItem;
}
/**
 * Build request payload for service 'permissionItem' action 'add'.
 *
 * Usage: Adds a new permission item object to the account.
 * This action is available only to Kaltura system administrators
 *
 * Server response type:         KalturaPermissionItem
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionItemAddAction extends KalturaRequest<KalturaPermissionItem> {
    permissionItem: KalturaPermissionItem;
    constructor(data: PermissionItemAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}