import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaReportInputBaseFilterArgs extends KalturaObjectBaseArgs {
    fromDate?: number;
    toDate?: number;
    fromDay?: string;
    toDay?: string;
}
export declare class KalturaReportInputBaseFilter extends KalturaObjectBase {
    fromDate: number;
    toDate: number;
    fromDay: string;
    toDay: string;
    constructor(data?: KalturaReportInputBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
