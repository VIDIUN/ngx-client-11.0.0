import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ReportGetUrlForReportAsCsvActionArgs extends KalturaRequestArgs {
    reportTitle: string;
    reportText: string;
    headers: string;
    reportType: KalturaReportType;
    reportInputFilter: KalturaReportInputFilter;
    dimension?: string;
    pager?: KalturaFilterPager;
    order?: string;
    objectIds?: string;
}
/**
 * Build request payload for service 'report' action 'getUrlForReportAsCsv'.
 *
 * Usage: will create a Csv file for the given report and return the URL to access it
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class ReportGetUrlForReportAsCsvAction extends KalturaRequest<string> {
    reportTitle: string;
    reportText: string;
    headers: string;
    reportType: KalturaReportType;
    reportInputFilter: KalturaReportInputFilter;
    dimension: string;
    pager: KalturaFilterPager;
    order: string;
    objectIds: string;
    constructor(data: ReportGetUrlForReportAsCsvActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
