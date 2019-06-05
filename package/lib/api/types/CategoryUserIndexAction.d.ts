import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUserIndexActionArgs extends KalturaRequestArgs {
    userId: string;
    categoryId: number;
    shouldUpdate?: boolean;
}
/**
 * Build request payload for service 'categoryUser' action 'index'.
 *
 * Usage: Index CategoryUser by userid and category id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserIndexAction extends KalturaRequest<number> {
    userId: string;
    categoryId: number;
    shouldUpdate: boolean;
    constructor(data: CategoryUserIndexActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
