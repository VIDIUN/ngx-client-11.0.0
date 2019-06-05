import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchCategoryBaseItem, KalturaESearchCategoryBaseItemArgs } from './KalturaESearchCategoryBaseItem';
export interface KalturaESearchCategoryQueryArgs extends KalturaESearchCategoryBaseItemArgs {
    eSearchQuery?: string;
}
export declare class KalturaESearchCategoryQuery extends KalturaESearchCategoryBaseItem {
    eSearchQuery: string;
    constructor(data?: KalturaESearchCategoryQueryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
