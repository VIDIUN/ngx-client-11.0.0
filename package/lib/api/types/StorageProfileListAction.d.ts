import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfileListResponse } from './KalturaStorageProfileListResponse';
import { KalturaStorageProfileFilter } from './KalturaStorageProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface StorageProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaStorageProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'storageProfile' action 'list'.
 *
 *
 *
 * Server response type:         KalturaStorageProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class StorageProfileListAction extends KalturaRequest<KalturaStorageProfileListResponse> {
    filter: KalturaStorageProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: StorageProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}