import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNodeListResponse } from './KalturaEntryServerNodeListResponse';
import { KalturaEntryServerNodeFilter } from './KalturaEntryServerNodeFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryServerNodeListActionArgs extends KalturaRequestArgs {
    filter?: KalturaEntryServerNodeFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'entryServerNode' action 'list'.
 *
 *
 *
 * Server response type:         KalturaEntryServerNodeListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class EntryServerNodeListAction extends KalturaRequest<KalturaEntryServerNodeListResponse> {
    filter: KalturaEntryServerNodeFilter;
    pager: KalturaFilterPager;
    constructor(data?: EntryServerNodeListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}