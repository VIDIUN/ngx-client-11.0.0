import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchResult } from './KalturaESearchResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchResponseArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaESearchResponse extends KalturaObjectBase {
    readonly totalCount: number;
    readonly objects: KalturaESearchResult[];
    constructor(data?: KalturaESearchResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
