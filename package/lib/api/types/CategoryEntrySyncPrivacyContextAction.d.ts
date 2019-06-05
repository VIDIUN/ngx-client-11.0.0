import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryEntrySyncPrivacyContextActionArgs extends KalturaRequestArgs {
    entryId: string;
    categoryId: number;
}
/**
 * Build request payload for service 'categoryEntry' action 'syncPrivacyContext'.
 *
 * Usage: update privacy context from the category
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryEntrySyncPrivacyContextAction extends KalturaRequest<void> {
    entryId: string;
    categoryId: number;
    constructor(data: CategoryEntrySyncPrivacyContextActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
