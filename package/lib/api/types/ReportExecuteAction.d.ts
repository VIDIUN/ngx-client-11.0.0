import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportResponse } from './KalturaReportResponse';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ReportExecuteActionArgs extends KalturaRequestArgs {
    id: number;
    params?: KalturaKeyValue[];
}
/**
 * Build request payload for service 'report' action 'execute'.
 *
 *
 *
 * Server response type:         KalturaReportResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ReportExecuteAction extends KalturaRequest<KalturaReportResponse> {
    id: number;
    params: KalturaKeyValue[];
    constructor(data: ReportExecuteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}