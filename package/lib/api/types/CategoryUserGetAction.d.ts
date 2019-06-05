import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUserGetActionArgs extends KalturaRequestArgs {
    categoryId: number;
    userId: string;
}
/**
 * Build request payload for service 'categoryUser' action 'get'.
 *
 * Usage: Get CategoryUser by id
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserGetAction extends KalturaRequest<KalturaCategoryUser> {
    categoryId: number;
    userId: string;
    constructor(data: CategoryUserGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
