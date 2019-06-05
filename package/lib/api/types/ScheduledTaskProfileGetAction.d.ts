import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduledTaskProfileGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'scheduledTaskProfile' action 'get'.
 *
 * Usage: Retrieve a scheduled task profile by id
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduledTaskProfileGetAction extends KalturaRequest<KalturaScheduledTaskProfile> {
    id: number;
    constructor(data: ScheduledTaskProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
