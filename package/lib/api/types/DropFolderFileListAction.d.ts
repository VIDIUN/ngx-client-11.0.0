import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFileListResponse } from './KalturaDropFolderFileListResponse';
import { KalturaDropFolderFileFilter } from './KalturaDropFolderFileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderFileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaDropFolderFileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'dropFolderFile' action 'list'.
 *
 * Usage: List KalturaDropFolderFile objects
 *
 * Server response type:         KalturaDropFolderFileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderFileListAction extends KalturaRequest<KalturaDropFolderFileListResponse> {
    filter: KalturaDropFolderFileFilter;
    pager: KalturaFilterPager;
    constructor(data?: DropFolderFileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
