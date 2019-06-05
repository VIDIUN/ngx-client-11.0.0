import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryUser } from './KalturaCategoryUser';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryUserDeactivateActionArgs extends KalturaRequestArgs {
    categoryId: number;
    userId: string;
}
/**
 * Build request payload for service 'categoryUser' action 'deactivate'.
 *
 * Usage: reject CategoryUser
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryUserDeactivateAction extends KalturaRequest<KalturaCategoryUser> {
    categoryId: number;
    userId: string;
    constructor(data: CategoryUserDeactivateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
