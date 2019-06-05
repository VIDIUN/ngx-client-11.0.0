import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveReportsServeReportActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'liveReports' action 'serveReport'.
 *
 * Usage: Will serve a requested report
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class LiveReportsServeReportAction extends KalturaRequest<string> {
    id: string;
    constructor(data: LiveReportsServeReportActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}