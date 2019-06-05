import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUserAddActionArgs extends KalturaRequestArgs {
    categoryUser: KalturaCategoryUser;
}
/**
 * Build request payload for service 'categoryUser' action 'add'.
 *
 * Usage: Add new CategoryUser
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserAddAction extends KalturaRequest<KalturaCategoryUser> {
    categoryUser: KalturaCategoryUser;
    constructor(data: CategoryUserAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
