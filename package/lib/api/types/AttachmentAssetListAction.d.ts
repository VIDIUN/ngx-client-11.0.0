import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAssetListResponse } from './KalturaAttachmentAssetListResponse';
import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AttachmentAssetListActionArgs extends KalturaRequestArgs {
    filter?: KalturaAssetFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'attachmentAsset' action 'list'.
 *
 * Usage: List attachment Assets by filter and pager
 *
 * Server response type:         KalturaAttachmentAssetListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class AttachmentAssetListAction extends KalturaRequest<KalturaAttachmentAssetListResponse> {
    filter: KalturaAssetFilter;
    pager: KalturaFilterPager;
    constructor(data?: AttachmentAssetListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
