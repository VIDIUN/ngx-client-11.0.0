import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryEntryActivateActionArgs extends KalturaRequestArgs {
    entryId: string;
    categoryId: number;
}
/**
 * Build request payload for service 'categoryEntry' action 'activate'.
 *
 * Usage: activate CategoryEntry when it is pending moderation
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryEntryActivateAction extends KalturaRequest<void> {
    entryId: string;
    categoryId: number;
    constructor(data: CategoryEntryActivateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}