import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaBulkServiceData, KalturaBulkServiceDataArgs } from './KalturaBulkServiceData';
export interface KalturaBulkServiceFilterDataArgs extends KalturaBulkServiceDataArgs {
    filter?: KalturaFilter;
    templateObject?: KalturaObjectBase;
}
export declare class KalturaBulkServiceFilterData extends KalturaBulkServiceData {
    filter: KalturaFilter;
    templateObject: KalturaObjectBase;
    constructor(data?: KalturaBulkServiceFilterDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
