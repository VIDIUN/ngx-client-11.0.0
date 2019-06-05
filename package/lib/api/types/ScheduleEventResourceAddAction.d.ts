import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventResourceAddActionArgs extends KalturaRequestArgs {
    scheduleEventResource: KalturaScheduleEventResource;
}
/**
 * Build request payload for service 'scheduleEventResource' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleEventResource object
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventResourceAddAction extends KalturaRequest<KalturaScheduleEventResource> {
    scheduleEventResource: KalturaScheduleEventResource;
    constructor(data: ScheduleEventResourceAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
