import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileListResponse } from './KalturaResponseProfileListResponse';
import { KalturaResponseProfileFilter } from './KalturaResponseProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ResponseProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaResponseProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'responseProfile' action 'list'.
 *
 * Usage: List response profiles by filter and pager
 *
 * Server response type:         KalturaResponseProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ResponseProfileListAction extends KalturaRequest<KalturaResponseProfileListResponse> {
    filter: KalturaResponseProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: ResponseProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}