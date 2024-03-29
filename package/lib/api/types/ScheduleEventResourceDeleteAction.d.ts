import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventResourceDeleteActionArgs extends KalturaRequestArgs {
    scheduleEventId: number;
    scheduleResourceId: number;
}
/**
 * Build request payload for service 'scheduleEventResource' action 'delete'.
 *
 * Usage: Mark the KalturaScheduleEventResource object as deleted
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventResourceDeleteAction extends KalturaRequest<void> {
    scheduleEventId: number;
    scheduleResourceId: number;
    constructor(data: ScheduleEventResourceDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
