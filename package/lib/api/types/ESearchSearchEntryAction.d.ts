import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchResponse } from './KalturaESearchResponse';
import { KalturaESearchEntryParams } from './KalturaESearchEntryParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ESearchSearchEntryActionArgs extends KalturaRequestArgs {
    searchParams: KalturaESearchEntryParams;
    pager?: KalturaPager;
}
/**
 * Build request payload for service 'eSearch' action 'searchEntry'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ESearchSearchEntryAction extends KalturaRequest<KalturaESearchResponse> {
    searchParams: KalturaESearchEntryParams;
    pager: KalturaPager;
    constructor(data: ESearchSearchEntryActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
