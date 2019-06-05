import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaReportFilterArgs extends KalturaObjectBaseArgs {
    dimension?: string;
    values?: string;
}
export declare class KalturaReportFilter extends KalturaObjectBase {
    dimension: string;
    values: string;
    constructor(data?: KalturaReportFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
