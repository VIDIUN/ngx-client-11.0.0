import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUserActivateActionArgs extends KalturaRequestArgs {
    categoryId: number;
    userId: string;
}
/**
 * Build request payload for service 'categoryUser' action 'activate'.
 *
 * Usage: activate CategoryUser
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserActivateAction extends KalturaRequest<KalturaCategoryUser> {
    categoryId: number;
    userId: string;
    constructor(data: CategoryUserActivateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}