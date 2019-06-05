import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryMoveActionArgs extends KalturaRequestArgs {
    categoryIds: string;
    targetCategoryParentId: number;
}
/**
 * Build request payload for service 'category' action 'move'.
 *
 * Usage: Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryMoveAction extends KalturaRequest<boolean> {
    categoryIds: string;
    targetCategoryParentId: number;
    constructor(data: CategoryMoveActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}