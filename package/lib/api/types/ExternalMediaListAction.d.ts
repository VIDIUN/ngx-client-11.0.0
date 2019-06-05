import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntryListResponse } from './KalturaExternalMediaEntryListResponse';
import { KalturaExternalMediaEntryFilter } from './KalturaExternalMediaEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ExternalMediaListActionArgs extends KalturaRequestArgs {
    filter?: KalturaExternalMediaEntryFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'externalMedia' action 'list'.
 *
 * Usage: List media entries by filter with paging support
 *
 * Server response type:         KalturaExternalMediaEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ExternalMediaListAction extends KalturaRequest<KalturaExternalMediaEntryListResponse> {
    filter: KalturaExternalMediaEntryFilter;
    pager: KalturaFilterPager;
    constructor(data?: ExternalMediaListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
