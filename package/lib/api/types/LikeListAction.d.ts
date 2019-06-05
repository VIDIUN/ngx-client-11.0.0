import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLikeListResponse } from './KalturaLikeListResponse';
import { KalturaLikeFilter } from './KalturaLikeFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LikeListActionArgs extends KalturaRequestArgs {
    filter?: KalturaLikeFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'like' action 'list'.
 *
 *
 *
 * Server response type:         KalturaLikeListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class LikeListAction extends KalturaRequest<KalturaLikeListResponse> {
    filter: KalturaLikeFilter;
    pager: KalturaFilterPager;
    constructor(data?: LikeListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
