import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnotationListResponse } from './KalturaAnnotationListResponse';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnnotationListActionArgs extends KalturaRequestArgs {
    filter?: KalturaCuePointFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'annotation' action 'list'.
 *
 * Usage: List annotation objects by filter and pager
 *
 * Server response type:         KalturaAnnotationListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class AnnotationListAction extends KalturaRequest<KalturaAnnotationListResponse> {
    filter: KalturaCuePointFilter;
    pager: KalturaFilterPager;
    constructor(data?: AnnotationListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}