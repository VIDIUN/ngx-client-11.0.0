import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataListResponse } from './KalturaMetadataListResponse';
import { KalturaMetadataFilter } from './KalturaMetadataFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataListActionArgs extends KalturaRequestArgs {
    filter?: KalturaMetadataFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'metadata' action 'list'.
 *
 * Usage: List metadata objects by filter and pager
 *
 * Server response type:         KalturaMetadataListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataListAction extends KalturaRequest<KalturaMetadataListResponse> {
    filter: KalturaMetadataFilter;
    pager: KalturaFilterPager;
    constructor(data?: MetadataListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
