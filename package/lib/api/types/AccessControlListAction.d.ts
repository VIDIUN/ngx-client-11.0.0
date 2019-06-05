import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlListResponse } from './KalturaAccessControlListResponse';
import { KalturaAccessControlFilter } from './KalturaAccessControlFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlListActionArgs extends KalturaRequestArgs {
    filter?: KalturaAccessControlFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'accessControl' action 'list'.
 *
 * Usage: List Access Control Profiles by filter and pager
 *
 * Server response type:         KalturaAccessControlListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlListAction extends KalturaRequest<KalturaAccessControlListResponse> {
    filter: KalturaAccessControlFilter;
    pager: KalturaFilterPager;
    constructor(data?: AccessControlListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}