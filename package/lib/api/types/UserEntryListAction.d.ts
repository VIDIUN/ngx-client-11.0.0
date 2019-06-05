import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntryListResponse } from './KalturaUserEntryListResponse';
import { KalturaUserEntryFilter } from './KalturaUserEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserEntryListActionArgs extends KalturaRequestArgs {
    filter?: KalturaUserEntryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'userEntry' action 'list'.
 *
 *
 *
 * Server response type:         KalturaUserEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class UserEntryListAction extends KalturaRequest<KalturaUserEntryListResponse> {
    filter: KalturaUserEntryFilter;
    pager: KalturaFilterPager;
    constructor(data?: UserEntryListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}