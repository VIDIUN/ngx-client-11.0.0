import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResourceListResponse } from './KalturaScheduleEventResourceListResponse';
import { KalturaScheduleEventResourceFilter } from './KalturaScheduleEventResourceFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventResourceListActionArgs extends KalturaRequestArgs {
    filter?: KalturaScheduleEventResourceFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'scheduleEventResource' action 'list'.
 *
 * Usage: List KalturaScheduleEventResource objects
 *
 * Server response type:         KalturaScheduleEventResourceListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventResourceListAction extends KalturaRequest<KalturaScheduleEventResourceListResponse> {
    filter: KalturaScheduleEventResourceFilter;
    pager: KalturaFilterPager;
    constructor(data?: ScheduleEventResourceListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
