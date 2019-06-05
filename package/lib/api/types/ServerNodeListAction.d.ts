import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNodeListResponse } from './KalturaServerNodeListResponse';
import { KalturaServerNodeFilter } from './KalturaServerNodeFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ServerNodeListActionArgs extends KalturaRequestArgs {
    filter?: KalturaServerNodeFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'serverNode' action 'list'.
 *
 *
 *
 * Server response type:         KalturaServerNodeListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ServerNodeListAction extends KalturaRequest<KalturaServerNodeListResponse> {
    filter: KalturaServerNodeFilter;
    pager: KalturaFilterPager;
    constructor(data?: ServerNodeListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
