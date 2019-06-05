import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppTokenListResponse } from './KalturaAppTokenListResponse';
import { KalturaAppTokenFilter } from './KalturaAppTokenFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AppTokenListActionArgs extends KalturaRequestArgs {
    filter?: KalturaAppTokenFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'appToken' action 'list'.
 *
 * Usage: List application authentication tokens by filter and pager
 *
 * Server response type:         KalturaAppTokenListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class AppTokenListAction extends KalturaRequest<KalturaAppTokenListResponse> {
    filter: KalturaAppTokenFilter;
    pager: KalturaFilterPager;
    constructor(data?: AppTokenListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}