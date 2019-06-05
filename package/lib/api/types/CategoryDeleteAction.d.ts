import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryDeleteActionArgs extends KalturaRequestArgs {
    id: number;
    moveEntriesToParentCategory?: KalturaNullableBoolean;
}
/**
 * Build request payload for service 'category' action 'delete'.
 *
 * Usage: Delete a Category
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryDeleteAction extends KalturaRequest<void> {
    id: number;
    moveEntriesToParentCategory: KalturaNullableBoolean;
    constructor(data: CategoryDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
