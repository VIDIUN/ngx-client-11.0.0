import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistributionListResponse } from './KalturaEntryDistributionListResponse';
import { KalturaEntryDistributionFilter } from './KalturaEntryDistributionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryDistributionListActionArgs extends KalturaRequestArgs {
    filter?: KalturaEntryDistributionFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'entryDistribution' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaEntryDistributionListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class EntryDistributionListAction extends KalturaRequest<KalturaEntryDistributionListResponse> {
    filter: KalturaEntryDistributionFilter;
    pager: KalturaFilterPager;
    constructor(data?: EntryDistributionListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}