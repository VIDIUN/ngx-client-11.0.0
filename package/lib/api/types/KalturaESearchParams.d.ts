import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchOrderBy } from './KalturaESearchOrderBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaESearchParamsArgs extends KalturaObjectBaseArgs {
    objectStatuses?: string;
    objectId?: string;
    orderBy?: KalturaESearchOrderBy;
}
export declare class KalturaESearchParams extends KalturaObjectBase {
    objectStatuses: string;
    objectId: string;
    orderBy: KalturaESearchOrderBy;
    constructor(data?: KalturaESearchParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
