import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectListResponse } from './KalturaObjectListResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ScheduledTaskProfileGetDryRunResultsActionArgs extends KalturaRequestArgs {
    requestId: number;
}
/**
 * Build request payload for service 'scheduledTaskProfile' action 'getDryRunResults'.
 *
 *
 *
 * Server response type:         KalturaObjectListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ScheduledTaskProfileGetDryRunResultsAction extends KalturaRequest<KalturaObjectListResponse> {
    requestId: number;
    constructor(data: ScheduledTaskProfileGetDryRunResultsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
