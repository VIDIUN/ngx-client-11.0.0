import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryEntryDeleteActionArgs extends KalturaRequestArgs {
    entryId: string;
    categoryId: number;
}
/**
 * Build request payload for service 'categoryEntry' action 'delete'.
 *
 * Usage: Delete CategoryEntry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryEntryDeleteAction extends KalturaRequest<void> {
    entryId: string;
    categoryId: number;
    constructor(data: CategoryEntryDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}