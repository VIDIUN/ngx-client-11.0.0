import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventListResponse } from './KalturaScheduleEventListResponse';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventGetConflictsActionArgs extends KalturaRequestArgs {
    resourceIds: string;
    scheduleEvent: KalturaScheduleEvent;
    scheduleEventIdToIgnore?: string;
}
/**
 * Build request payload for service 'scheduleEvent' action 'getConflicts'.
 *
 * Usage: List conflicting events for resourcesIds by event's dates
 *
 * Server response type:         KalturaScheduleEventListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventGetConflictsAction extends KalturaRequest<KalturaScheduleEventListResponse> {
    resourceIds: string;
    scheduleEvent: KalturaScheduleEvent;
    scheduleEventIdToIgnore: string;
    constructor(data: ScheduleEventGetConflictsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
