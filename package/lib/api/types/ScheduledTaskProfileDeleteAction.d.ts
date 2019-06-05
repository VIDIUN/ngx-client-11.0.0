import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduledTaskProfileDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'scheduledTaskProfile' action 'delete'.
 *
 * Usage: Delete a scheduled task profile
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduledTaskProfileDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: ScheduledTaskProfileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
