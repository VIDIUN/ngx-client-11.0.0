import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportResponse } from './KalturaReportResponse';
import { KalturaAnalyticsFilter } from './KalturaAnalyticsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AnalyticsQueryActionArgs extends KalturaRequestArgs {
    filter: KalturaAnalyticsFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'analytics' action 'query'.
 *
 * Usage: report query action allows to get a analytics data for specific query dimensions, metrics and filters
 *
 * Server response type:         KalturaReportResponse
 * Server failure response type: KalturaAPIException
 */
export declare class AnalyticsQueryAction extends KalturaRequest<KalturaReportResponse> {
    filter: KalturaAnalyticsFilter;
    pager: KalturaFilterPager;
    constructor(data: AnalyticsQueryActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}