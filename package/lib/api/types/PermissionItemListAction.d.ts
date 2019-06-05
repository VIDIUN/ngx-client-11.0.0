import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItemListResponse } from './KalturaPermissionItemListResponse';
import { KalturaPermissionItemFilter } from './KalturaPermissionItemFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PermissionItemListActionArgs extends KalturaRequestArgs {
    filter?: KalturaPermissionItemFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'permissionItem' action 'list'.
 *
 * Usage: Lists permission item objects that are associated with an account
 *
 * Server response type:         KalturaPermissionItemListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class PermissionItemListAction extends KalturaRequest<KalturaPermissionItemListResponse> {
    filter: KalturaPermissionItemFilter;
    pager: KalturaFilterPager;
    constructor(data?: PermissionItemListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
