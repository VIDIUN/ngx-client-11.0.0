import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportTable } from './KalturaReportTable';
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ReportGetTableActionArgs extends KalturaRequestArgs {
    reportType: KalturaReportType;
    reportInputFilter: KalturaReportInputFilter;
    pager: KalturaFilterPager;
    order?: string;
    objectIds?: string;
}
/**
 * Build request payload for service 'report' action 'getTable'.
 *
 * Usage: report getTable action allows to get a graph data for a specific report
 *
 * Server response type:         KalturaReportTable
 * Server failure response type: KalturaAPIException
 */
export declare class ReportGetTableAction extends KalturaRequest<KalturaReportTable> {
    reportType: KalturaReportType;
    reportInputFilter: KalturaReportInputFilter;
    pager: KalturaFilterPager;
    order: string;
    objectIds: string;
    constructor(data: ReportGetTableActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
