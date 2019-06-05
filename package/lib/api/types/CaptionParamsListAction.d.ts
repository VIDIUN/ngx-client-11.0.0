import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParamsListResponse } from './KalturaCaptionParamsListResponse';
import { KalturaCaptionParamsFilter } from './KalturaCaptionParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CaptionParamsListActionArgs extends KalturaRequestArgs {
    filter?: KalturaCaptionParamsFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'captionParams' action 'list'.
 *
 * Usage: List Caption Params by filter with paging support (By default - all system default params will be listed too)
 *
 * Server response type:         KalturaCaptionParamsListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CaptionParamsListAction extends KalturaRequest<KalturaCaptionParamsListResponse> {
    filter: KalturaCaptionParamsFilter;
    pager: KalturaFilterPager;
    constructor(data?: CaptionParamsListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}