import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventGetActionArgs extends KalturaRequestArgs {
    scheduleEventId: number;
}
/**
 * Build request payload for service 'scheduleEvent' action 'get'.
 *
 * Usage: Retrieve a KalturaScheduleEvent object by ID
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventGetAction extends KalturaRequest<KalturaScheduleEvent> {
    scheduleEventId: number;
    constructor(data: ScheduleEventGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
