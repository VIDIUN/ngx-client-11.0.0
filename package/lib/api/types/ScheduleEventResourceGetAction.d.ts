import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleEventResourceGetActionArgs extends KalturaRequestArgs {
    scheduleEventId: number;
    scheduleResourceId: number;
}
/**
 * Build request payload for service 'scheduleEventResource' action 'get'.
 *
 * Usage: Retrieve a KalturaScheduleEventResource object by ID
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleEventResourceGetAction extends KalturaRequest<KalturaScheduleEventResource> {
    scheduleEventId: number;
    scheduleResourceId: number;
    constructor(data: ScheduleEventResourceGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
