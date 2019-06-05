import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchResponse } from './KalturaESearchResponse';
import { KalturaESearchCategoryParams } from './KalturaESearchCategoryParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ESearchSearchCategoryActionArgs extends KalturaRequestArgs {
    searchParams: KalturaESearchCategoryParams;
    pager?: KalturaPager;
}
/**
 * Build request payload for service 'eSearch' action 'searchCategory'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ESearchSearchCategoryAction extends KalturaRequest<KalturaESearchResponse> {
    searchParams: KalturaESearchCategoryParams;
    pager: KalturaPager;
    constructor(data: ESearchSearchCategoryActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
