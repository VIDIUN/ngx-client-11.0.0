import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventCancelActionArgs extends KalturaRequestArgs {
    scheduleEventId: number;
}
/**
 * Build request payload for service 'scheduleEvent' action 'cancel'.
 *
 * Usage: Mark the KalturaScheduleEvent object as cancelled
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventCancelAction extends KalturaRequest<KalturaScheduleEvent> {
    scheduleEventId: number;
    constructor(data: ScheduleEventCancelActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
