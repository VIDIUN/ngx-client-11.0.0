import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    category: KalturaCategory;
}
/**
 * Build request payload for service 'category' action 'update'.
 *
 * Usage: Update Category
 *
 * Server response type:         KalturaCategory
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUpdateAction extends KalturaRequest<KalturaCategory> {
    id: number;
    category: KalturaCategory;
    constructor(data: CategoryUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
