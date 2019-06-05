import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleResource } from './KalturaScheduleResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduleResourceGetActionArgs extends KalturaRequestArgs {
    scheduleResourceId: number;
}
/**
 * Build request payload for service 'scheduleResource' action 'get'.
 *
 * Usage: Retrieve a KalturaScheduleResource object by ID
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduleResourceGetAction extends KalturaRequest<KalturaScheduleResource> {
    scheduleResourceId: number;
    constructor(data: ScheduleResourceGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
