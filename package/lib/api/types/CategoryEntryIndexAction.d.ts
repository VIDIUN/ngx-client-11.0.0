import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryEntryIndexActionArgs extends KalturaRequestArgs {
    entryId: string;
    categoryId: number;
    shouldUpdate?: boolean;
}
/**
 * Build request payload for service 'categoryEntry' action 'index'.
 *
 * Usage: Index CategoryEntry by Id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryEntryIndexAction extends KalturaRequest<number> {
    entryId: string;
    categoryId: number;
    shouldUpdate: boolean;
    constructor(data: CategoryEntryIndexActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}