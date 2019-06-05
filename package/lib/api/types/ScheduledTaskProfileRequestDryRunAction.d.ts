import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduledTaskProfileRequestDryRunActionArgs extends KalturaRequestArgs {
    scheduledTaskProfileId: number;
    maxResults?: number;
}
/**
 * Build request payload for service 'scheduledTaskProfile' action 'requestDryRun'.
 *
 *
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduledTaskProfileRequestDryRunAction extends KalturaRequest<number> {
    scheduledTaskProfileId: number;
    maxResults: number;
    constructor(data: ScheduledTaskProfileRequestDryRunActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
