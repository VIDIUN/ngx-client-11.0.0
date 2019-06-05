import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchEntryBaseItem, KalturaESearchEntryBaseItemArgs } from './KalturaESearchEntryBaseItem';
export interface KalturaESearchEntryQueryArgs extends KalturaESearchEntryBaseItemArgs {
    eSearchQuery?: string;
}
export declare class KalturaESearchEntryQuery extends KalturaESearchEntryBaseItem {
    eSearchQuery: string;
    constructor(data?: KalturaESearchEntryQueryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
