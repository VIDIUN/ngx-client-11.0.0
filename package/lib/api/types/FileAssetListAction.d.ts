import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAssetListResponse } from './KalturaFileAssetListResponse';
import { KalturaFileAssetFilter } from './KalturaFileAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface FileAssetListActionArgs extends KalturaRequestArgs {
    filter: KalturaFileAssetFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'fileAsset' action 'list'.
 *
 * Usage: List file assets by filter and pager
 *
 * Server response type:         KalturaFileAssetListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class FileAssetListAction extends KalturaRequest<KalturaFileAssetListResponse> {
    filter: KalturaFileAssetFilter;
    pager: KalturaFilterPager;
    constructor(data: FileAssetListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}