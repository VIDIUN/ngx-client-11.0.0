import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveReportExportResponse } from './KalturaLiveReportExportResponse';
import { KalturaLiveReportExportType } from './KalturaLiveReportExportType';
import { KalturaLiveReportExportParams } from './KalturaLiveReportExportParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveReportsExportToCsvActionArgs extends KalturaRequestArgs {
    reportType: KalturaLiveReportExportType;
    params: KalturaLiveReportExportParams;
}
/**
 * Build request payload for service 'liveReports' action 'exportToCsv'.
 *
 *
 *
 * Server response type:         KalturaLiveReportExportResponse
 * Server failure response type: KalturaAPIException
 */
export declare class LiveReportsExportToCsvAction extends KalturaRequest<KalturaLiveReportExportResponse> {
    reportType: KalturaLiveReportExportType;
    params: KalturaLiveReportExportParams;
    constructor(data: LiveReportsExportToCsvActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
