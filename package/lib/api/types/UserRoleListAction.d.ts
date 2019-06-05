import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRoleListResponse } from './KalturaUserRoleListResponse';
import { KalturaUserRoleFilter } from './KalturaUserRoleFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserRoleListActionArgs extends KalturaRequestArgs {
    filter?: KalturaUserRoleFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'userRole' action 'list'.
 *
 * Usage: Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them
 *
 * Server response type:         KalturaUserRoleListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class UserRoleListAction extends KalturaRequest<KalturaUserRoleListResponse> {
    filter: KalturaUserRoleFilter;
    pager: KalturaFilterPager;
    constructor(data?: UserRoleListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
