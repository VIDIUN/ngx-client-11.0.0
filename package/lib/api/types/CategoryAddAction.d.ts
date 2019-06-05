import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryAddActionArgs extends KalturaRequestArgs {
    category: KalturaCategory;
}
/**
 * Build request payload for service 'category' action 'add'.
 *
 * Usage: Add new Category
 *
 * Server response type:         KalturaCategory
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryAddAction extends KalturaRequest<KalturaCategory> {
    category: KalturaCategory;
    constructor(data: CategoryAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
