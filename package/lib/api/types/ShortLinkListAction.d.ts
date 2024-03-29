import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLinkListResponse } from './KalturaShortLinkListResponse';
import { KalturaShortLinkFilter } from './KalturaShortLinkFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ShortLinkListActionArgs extends KalturaRequestArgs {
    filter?: KalturaShortLinkFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'shortLink' action 'list'.
 *
 * Usage: List short link objects by filter and pager
 *
 * Server response type:         KalturaShortLinkListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ShortLinkListAction extends KalturaRequest<KalturaShortLinkListResponse> {
    filter: KalturaShortLinkFilter;
    pager: KalturaFilterPager;
    constructor(data?: ShortLinkListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
