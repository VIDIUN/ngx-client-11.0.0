import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportGraph } from './KalturaReportGraph';
import { KalturaLiveReportType } from './KalturaLiveReportType';
import { KalturaLiveReportInputFilter } from './KalturaLiveReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveReportsGetEventsActionArgs extends KalturaRequestArgs {
    reportType: KalturaLiveReportType;
    filter?: KalturaLiveReportInputFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'liveReports' action 'getEvents'.
 *
 *
 *
 * Server response type:         KalturaReportGraph[]
 * Server failure response type: KalturaAPIException
 */
export declare class LiveReportsGetEventsAction extends KalturaRequest<KalturaReportGraph[]> {
    reportType: KalturaLiveReportType;
    filter: KalturaLiveReportInputFilter;
    pager: KalturaFilterPager;
    constructor(data: LiveReportsGetEventsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}