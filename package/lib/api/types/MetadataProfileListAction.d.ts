import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfileListResponse } from './KalturaMetadataProfileListResponse';
import { KalturaMetadataProfileFilter } from './KalturaMetadataProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaMetadataProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'metadataProfile' action 'list'.
 *
 * Usage: List metadata profile objects by filter and pager
 *
 * Server response type:         KalturaMetadataProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileListAction extends KalturaRequest<KalturaMetadataProfileListResponse> {
    filter: KalturaMetadataProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: MetadataProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
