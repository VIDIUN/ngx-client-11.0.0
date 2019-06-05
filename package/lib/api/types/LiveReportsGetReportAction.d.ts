import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStatsListResponse } from './KalturaLiveStatsListResponse';
import { KalturaLiveReportType } from './KalturaLiveReportType';
import { KalturaLiveReportInputFilter } from './KalturaLiveReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveReportsGetReportActionArgs extends KalturaRequestArgs {
    reportType: KalturaLiveReportType;
    filter?: KalturaLiveReportInputFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'liveReports' action 'getReport'.
 *
 *
 *
 * Server response type:         KalturaLiveStatsListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class LiveReportsGetReportAction extends KalturaRequest<KalturaLiveStatsListResponse> {
    reportType: KalturaLiveReportType;
    filter: KalturaLiveReportInputFilter;
    pager: KalturaFilterPager;
    constructor(data: LiveReportsGetReportActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
