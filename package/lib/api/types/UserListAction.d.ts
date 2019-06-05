import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserListResponse } from './KalturaUserListResponse';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserListActionArgs extends KalturaRequestArgs {
    filter?: KalturaUserFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'user' action 'list'.
 *
 * Usage: Lists user objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them
 *
 * Server response type:         KalturaUserListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class UserListAction extends KalturaRequest<KalturaUserListResponse> {
    filter: KalturaUserFilter;
    pager: KalturaFilterPager;
    constructor(data?: UserListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
