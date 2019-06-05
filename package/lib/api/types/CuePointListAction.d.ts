import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointListResponse } from './KalturaCuePointListResponse';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CuePointListActionArgs extends KalturaRequestArgs {
    filter?: KalturaCuePointFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'cuePoint' action 'list'.
 *
 * Usage: List cue point objects by filter and pager
 *
 * Server response type:         KalturaCuePointListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class CuePointListAction extends KalturaRequest<KalturaCuePointListResponse> {
    filter: KalturaCuePointFilter;
    pager: KalturaFilterPager;
    constructor(data?: CuePointListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
