import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUserUpdateActionArgs extends KalturaRequestArgs {
    categoryId: number;
    userId: string;
    categoryUser: KalturaCategoryUser;
    override?: boolean;
}
/**
 * Build request payload for service 'categoryUser' action 'update'.
 *
 * Usage: Update CategoryUser by id
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserUpdateAction extends KalturaRequest<KalturaCategoryUser> {
    categoryId: number;
    userId: string;
    categoryUser: KalturaCategoryUser;
    override: boolean;
    constructor(data: CategoryUserUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
