import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadTokenListResponse } from './KalturaUploadTokenListResponse';
import { KalturaUploadTokenFilter } from './KalturaUploadTokenFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UploadTokenListActionArgs extends KalturaRequestArgs {
    filter?: KalturaUploadTokenFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'uploadToken' action 'list'.
 *
 * Usage: List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only
 *
 * Server response type:         KalturaUploadTokenListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class UploadTokenListAction extends KalturaRequest<KalturaUploadTokenListResponse> {
    filter: KalturaUploadTokenFilter;
    pager: KalturaFilterPager;
    constructor(data?: UploadTokenListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}