import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportInterval } from './KalturaReportInterval';
import { KalturaReportInputBaseFilter, KalturaReportInputBaseFilterArgs } from './KalturaReportInputBaseFilter';
export interface KalturaReportInputFilterArgs extends KalturaReportInputBaseFilterArgs {
    keywords?: string;
    searchInTags?: boolean;
    searchInAdminTags?: boolean;
    categories?: string;
    timeZoneOffset?: number;
    interval?: KalturaReportInterval;
}
export declare class KalturaReportInputFilter extends KalturaReportInputBaseFilter {
    keywords: string;
    searchInTags: boolean;
    searchInAdminTags: boolean;
    categories: string;
    timeZoneOffset: number;
    interval: KalturaReportInterval;
    constructor(data?: KalturaReportInputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
