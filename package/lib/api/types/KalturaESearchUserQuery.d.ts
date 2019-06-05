import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchUserBaseItem, KalturaESearchUserBaseItemArgs } from './KalturaESearchUserBaseItem';
export interface KalturaESearchUserQueryArgs extends KalturaESearchUserBaseItemArgs {
    eSearchQuery?: string;
}
export declare class KalturaESearchUserQuery extends KalturaESearchUserBaseItem {
    eSearchQuery: string;
    constructor(data?: KalturaESearchUserQueryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
