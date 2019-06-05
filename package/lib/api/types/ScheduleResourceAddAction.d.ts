import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleResourceAddActionArgs extends KalturaRequestArgs {
    scheduleResource: KalturaScheduleResource;
}
/**
 * Build request payload for service 'scheduleResource' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleResource object
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleResourceAddAction extends KalturaRequest<KalturaScheduleResource> {
    scheduleResource: KalturaScheduleResource;
    constructor(data: ScheduleResourceAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
