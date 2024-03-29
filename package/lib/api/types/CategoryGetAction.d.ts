import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'category' action 'get'.
 *
 * Usage: Get Category by id
 *
 * Server response type:         KalturaCategory
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryGetAction extends KalturaRequest<KalturaCategory> {
    id: number;
    constructor(data: CategoryGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
