import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryIndexActionArgs extends KalturaRequestArgs {
    id: number;
    shouldUpdate?: boolean;
}
/**
 * Build request payload for service 'category' action 'index'.
 *
 * Usage: Index Category by id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryIndexAction extends KalturaRequest<number> {
    id: number;
    shouldUpdate: boolean;
    constructor(data: CategoryIndexActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
