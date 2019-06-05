import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleResourceDeleteActionArgs extends KalturaRequestArgs {
    scheduleResourceId: number;
}
/**
 * Build request payload for service 'scheduleResource' action 'delete'.
 *
 * Usage: Mark the KalturaScheduleResource object as deleted
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleResourceDeleteAction extends KalturaRequest<KalturaScheduleResource> {
    scheduleResourceId: number;
    constructor(data: ScheduleResourceDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
