import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryEntryRejectActionArgs extends KalturaRequestArgs {
    entryId: string;
    categoryId: number;
}
/**
 * Build request payload for service 'categoryEntry' action 'reject'.
 *
 * Usage: activate CategoryEntry when it is pending moderation
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryEntryRejectAction extends KalturaRequest<void> {
    entryId: string;
    categoryId: number;
    constructor(data: CategoryEntryRejectActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}