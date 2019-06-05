import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleResourceUpdateActionArgs extends KalturaRequestArgs {
    scheduleResourceId: number;
    scheduleResource: KalturaScheduleResource;
}
/**
 * Build request payload for service 'scheduleResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleResource object
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleResourceUpdateAction extends KalturaRequest<KalturaScheduleResource> {
    scheduleResourceId: number;
    scheduleResource: KalturaScheduleResource;
    constructor(data: ScheduleResourceUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}