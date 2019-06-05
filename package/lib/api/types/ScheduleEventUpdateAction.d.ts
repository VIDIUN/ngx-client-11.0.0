import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventUpdateActionArgs extends KalturaRequestArgs {
    scheduleEventId: number;
    scheduleEvent: KalturaScheduleEvent;
}
/**
 * Build request payload for service 'scheduleEvent' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleEvent object
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventUpdateAction extends KalturaRequest<KalturaScheduleEvent> {
    scheduleEventId: number;
    scheduleEvent: KalturaScheduleEvent;
    constructor(data: ScheduleEventUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
