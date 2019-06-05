import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUnlockCategoriesActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'category' action 'unlockCategories'.
 *
 * Usage: Unlock categories
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUnlockCategoriesAction extends KalturaRequest<void> {
    constructor(data?: CategoryUnlockCategoriesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}