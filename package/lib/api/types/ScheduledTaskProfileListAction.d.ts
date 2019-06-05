import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfileListResponse } from './KalturaScheduledTaskProfileListResponse';
import { KalturaScheduledTaskProfileFilter } from './KalturaScheduledTaskProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduledTaskProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaScheduledTaskProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'scheduledTaskProfile' action 'list'.
 *
 * Usage: List scheduled task profiles
 *
 * Server response type:         KalturaScheduledTaskProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduledTaskProfileListAction extends KalturaRequest<KalturaScheduledTaskProfileListResponse> {
    filter: KalturaScheduledTaskProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: ScheduledTaskProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}