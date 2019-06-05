import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventListResponse } from './KalturaScheduleEventListResponse';
import { KalturaScheduleEventFilter } from './KalturaScheduleEventFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventListActionArgs extends KalturaRequestArgs {
    filter?: KalturaScheduleEventFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'scheduleEvent' action 'list'.
 *
 * Usage: List KalturaScheduleEvent objects
 *
 * Server response type:         KalturaScheduleEventListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventListAction extends KalturaRequest<KalturaScheduleEventListResponse> {
    filter: KalturaScheduleEventFilter;
    pager: KalturaFilterPager;
    constructor(data?: ScheduleEventListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
