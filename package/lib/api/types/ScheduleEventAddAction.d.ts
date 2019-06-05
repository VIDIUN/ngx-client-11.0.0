import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventAddActionArgs extends KalturaRequestArgs {
    scheduleEvent: KalturaScheduleEvent;
}
/**
 * Build request payload for service 'scheduleEvent' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleEvent object
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventAddAction extends KalturaRequest<KalturaScheduleEvent> {
    scheduleEvent: KalturaScheduleEvent;
    constructor(data: ScheduleEventAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
