import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderListResponse } from './KalturaDropFolderListResponse';
import { KalturaDropFolderFilter } from './KalturaDropFolderFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderListActionArgs extends KalturaRequestArgs {
    filter?: KalturaDropFolderFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'dropFolder' action 'list'.
 *
 * Usage: List KalturaDropFolder objects
 *
 * Server response type:         KalturaDropFolderListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderListAction extends KalturaRequest<KalturaDropFolderListResponse> {
    filter: KalturaDropFolderFilter;
    pager: KalturaFilterPager;
    constructor(data?: DropFolderListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}