import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventDeleteActionArgs extends KalturaRequestArgs {
    scheduleEventId: number;
}
/**
 * Build request payload for service 'scheduleEvent' action 'delete'.
 *
 * Usage: Mark the KalturaScheduleEvent object as deleted
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventDeleteAction extends KalturaRequest<KalturaScheduleEvent> {
    scheduleEventId: number;
    constructor(data: ScheduleEventDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
