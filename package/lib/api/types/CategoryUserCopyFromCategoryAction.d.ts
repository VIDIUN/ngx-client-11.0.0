import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUserCopyFromCategoryActionArgs extends KalturaRequestArgs {
    categoryId: number;
}
/**
 * Build request payload for service 'categoryUser' action 'copyFromCategory'.
 *
 * Usage: Copy all memeber from parent category
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserCopyFromCategoryAction extends KalturaRequest<void> {
    categoryId: number;
    constructor(data: CategoryUserCopyFromCategoryActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}