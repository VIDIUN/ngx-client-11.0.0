import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchEntryOperator } from './KalturaESearchEntryOperator';
import { KalturaESearchParams, KalturaESearchParamsArgs } from './KalturaESearchParams';
export interface KalturaESearchEntryParamsArgs extends KalturaESearchParamsArgs {
    searchOperator?: KalturaESearchEntryOperator;
}
export declare class KalturaESearchEntryParams extends KalturaESearchParams {
    searchOperator: KalturaESearchEntryOperator;
    constructor(data?: KalturaESearchEntryParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
