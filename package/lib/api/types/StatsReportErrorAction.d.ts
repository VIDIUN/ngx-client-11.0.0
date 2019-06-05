import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface StatsReportErrorActionArgs extends KalturaRequestArgs {
    errorCode: string;
    errorMessage: string;
}
/**
 * Build request payload for service 'stats' action 'reportError'.
 *
 * Usage: Use this action to report errors to the kaltura server
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class StatsReportErrorAction extends KalturaRequest<void> {
    errorCode: string;
    errorMessage: string;
    constructor(data: StatsReportErrorActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}