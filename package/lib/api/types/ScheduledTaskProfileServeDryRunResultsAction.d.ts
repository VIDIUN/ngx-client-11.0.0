import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';
export interface ScheduledTaskProfileServeDryRunResultsActionArgs extends KalturaFileRequestArgs {
    requestId: number;
}
/**
 * Build request payload for service 'scheduledTaskProfile' action 'serveDryRunResults'.
 *
 * Usage: Serves dry run results by its request id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduledTaskProfileServeDryRunResultsAction extends KalturaFileRequest {
    requestId: number;
    constructor(data: ScheduledTaskProfileServeDryRunResultsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
