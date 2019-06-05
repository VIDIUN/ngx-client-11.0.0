import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventResourceUpdateActionArgs extends KalturaRequestArgs {
    scheduleEventId: number;
    scheduleResourceId: number;
    scheduleEventResource: KalturaScheduleEventResource;
}
/**
 * Build request payload for service 'scheduleEventResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleEventResource object
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventResourceUpdateAction extends KalturaRequest<KalturaScheduleEventResource> {
    scheduleEventId: number;
    scheduleResourceId: number;
    scheduleEventResource: KalturaScheduleEventResource;
    constructor(data: ScheduleEventResourceUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
