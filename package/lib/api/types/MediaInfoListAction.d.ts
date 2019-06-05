import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaInfoListResponse } from './KalturaMediaInfoListResponse';
import { KalturaMediaInfoFilter } from './KalturaMediaInfoFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaInfoListActionArgs extends KalturaRequestArgs {
    filter?: KalturaMediaInfoFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'mediaInfo' action 'list'.
 *
 * Usage: List media info objects by filter and pager
 *
 * Server response type:         KalturaMediaInfoListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class MediaInfoListAction extends KalturaRequest<KalturaMediaInfoListResponse> {
    filter: KalturaMediaInfoFilter;
    pager: KalturaFilterPager;
    constructor(data?: MediaInfoListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}