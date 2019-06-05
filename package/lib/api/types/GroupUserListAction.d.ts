import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUserListResponse } from './KalturaGroupUserListResponse';
import { KalturaGroupUserFilter } from './KalturaGroupUserFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface GroupUserListActionArgs extends KalturaRequestArgs {
    filter?: KalturaGroupUserFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'groupUser' action 'list'.
 *
 * Usage: List all GroupUsers
 *
 * Server response type:         KalturaGroupUserListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class GroupUserListAction extends KalturaRequest<KalturaGroupUserListResponse> {
    filter: KalturaGroupUserFilter;
    pager: KalturaFilterPager;
    constructor(data?: GroupUserListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
