import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResourceListResponse } from './KalturaScheduleResourceListResponse';
import { KalturaScheduleResourceFilter } from './KalturaScheduleResourceFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleResourceListActionArgs extends KalturaRequestArgs {
    filter?: KalturaScheduleResourceFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'scheduleResource' action 'list'.
 *
 * Usage: List KalturaScheduleResource objects
 *
 * Server response type:         KalturaScheduleResourceListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleResourceListAction extends KalturaRequest<KalturaScheduleResourceListResponse> {
    filter: KalturaScheduleResourceFilter;
    pager: KalturaFilterPager;
    constructor(data?: ScheduleResourceListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
