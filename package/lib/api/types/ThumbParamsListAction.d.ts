import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsListResponse } from './KalturaThumbParamsListResponse';
import { KalturaThumbParamsFilter } from './KalturaThumbParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ThumbParamsListActionArgs extends KalturaRequestArgs {
    filter?: KalturaThumbParamsFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'thumbParams' action 'list'.
 *
 * Usage: List Thumb Params by filter with paging support (By default - all system default params will be listed too)
 *
 * Server response type:         KalturaThumbParamsListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ThumbParamsListAction extends KalturaRequest<KalturaThumbParamsListResponse> {
    filter: KalturaThumbParamsFilter;
    pager: KalturaFilterPager;
    constructor(data?: ThumbParamsListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
