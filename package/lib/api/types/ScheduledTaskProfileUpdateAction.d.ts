import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduledTaskProfileUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    scheduledTaskProfile: KalturaScheduledTaskProfile;
}
/**
 * Build request payload for service 'scheduledTaskProfile' action 'update'.
 *
 * Usage: Update an existing scheduled task profile
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduledTaskProfileUpdateAction extends KalturaRequest<KalturaScheduledTaskProfile> {
    id: number;
    scheduledTaskProfile: KalturaScheduledTaskProfile;
    constructor(data: ScheduledTaskProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
