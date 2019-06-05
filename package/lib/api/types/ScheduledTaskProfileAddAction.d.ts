import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduledTaskProfileAddActionArgs extends KalturaRequestArgs {
    scheduledTaskProfile: KalturaScheduledTaskProfile;
}
/**
 * Build request payload for service 'scheduledTaskProfile' action 'add'.
 *
 * Usage: Add a new scheduled task profile
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduledTaskProfileAddAction extends KalturaRequest<KalturaScheduledTaskProfile> {
    scheduledTaskProfile: KalturaScheduledTaskProfile;
    constructor(data: ScheduledTaskProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
