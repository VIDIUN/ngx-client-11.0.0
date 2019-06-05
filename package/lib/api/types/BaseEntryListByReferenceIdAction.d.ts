import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryListResponse } from './KalturaBaseEntryListResponse';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryListByReferenceIdActionArgs extends KalturaRequestArgs {
    refId: string;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'baseEntry' action 'listByReferenceId'.
 *
 * Usage: List base entries by filter according to reference id
 *
 * Server response type:         KalturaBaseEntryListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryListByReferenceIdAction extends KalturaRequest<KalturaBaseEntryListResponse> {
    refId: string;
    pager: KalturaFilterPager;
    constructor(data: BaseEntryListByReferenceIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}