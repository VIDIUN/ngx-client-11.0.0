import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfileListResponse } from './KalturaAccessControlProfileListResponse';
import { KalturaAccessControlProfileFilter } from './KalturaAccessControlProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaAccessControlProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'accessControlProfile' action 'list'.
 *
 * Usage: List access control profiles by filter and pager
 *
 * Server response type:         KalturaAccessControlProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlProfileListAction extends KalturaRequest<KalturaAccessControlProfileListResponse> {
    filter: KalturaAccessControlProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: AccessControlProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}