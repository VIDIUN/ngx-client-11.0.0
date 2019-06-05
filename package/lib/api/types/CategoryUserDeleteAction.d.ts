import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUserDeleteActionArgs extends KalturaRequestArgs {
    categoryId: number;
    userId: string;
}
/**
 * Build request payload for service 'categoryUser' action 'delete'.
 *
 * Usage: Delete a CategoryUser
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserDeleteAction extends KalturaRequest<void> {
    categoryId: number;
    userId: string;
    constructor(data: CategoryUserDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}