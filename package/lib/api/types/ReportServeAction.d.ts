import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ReportServeActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'report' action 'serve'.
 *
 * Usage: Will serve a requested report
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class ReportServeAction extends KalturaRequest<string> {
    id: string;
    constructor(data: ReportServeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
