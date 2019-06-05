import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportBaseTotal } from './KalturaReportBaseTotal';
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ReportGetBaseTotalActionArgs extends KalturaRequestArgs {
    reportType: KalturaReportType;
    reportInputFilter: KalturaReportInputFilter;
    objectIds?: string;
}
/**
 * Build request payload for service 'report' action 'getBaseTotal'.
 *
 * Usage: report getBaseTotal action allows to get a the total base for storage reports
 *
 * Server response type:         KalturaReportBaseTotal[]
 * Server failure response type: KalturaAPIException
 */
export declare class ReportGetBaseTotalAction extends KalturaRequest<KalturaReportBaseTotal[]> {
    reportType: KalturaReportType;
    reportInputFilter: KalturaReportInputFilter;
    objectIds: string;
    constructor(data: ReportGetBaseTotalActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
