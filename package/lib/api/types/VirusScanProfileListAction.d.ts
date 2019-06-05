import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfileListResponse } from './KalturaVirusScanProfileListResponse';
import { KalturaVirusScanProfileFilter } from './KalturaVirusScanProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface VirusScanProfileListActionArgs extends KalturaRequestArgs {
    filter?: KalturaVirusScanProfileFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'virusScanProfile' action 'list'.
 *
 * Usage: List virus scan profile objects by filter and pager
 *
 * Server response type:         KalturaVirusScanProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class VirusScanProfileListAction extends KalturaRequest<KalturaVirusScanProfileListResponse> {
    filter: KalturaVirusScanProfileFilter;
    pager: KalturaFilterPager;
    constructor(data?: VirusScanProfileListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
