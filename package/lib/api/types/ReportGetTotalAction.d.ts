import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportTotal } from './KalturaReportTotal';
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ReportGetTotalActionArgs extends KalturaRequestArgs {
    reportType: KalturaReportType;
    reportInputFilter: KalturaReportInputFilter;
    objectIds?: string;
}
/**
 * Build request payload for service 'report' action 'getTotal'.
 *
 * Usage: report getTotal action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportTotal
 * Server failure response type: KalturaAPIException
 */
export declare class ReportGetTotalAction extends KalturaRequest<KalturaReportTotal> {
    reportType: KalturaReportType;
    reportInputFilter: KalturaReportInputFilter;
    objectIds: string;
    constructor(data: ReportGetTotalActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
