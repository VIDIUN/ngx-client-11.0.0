import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchResponse } from './KalturaESearchResponse';
import { KalturaESearchUserParams } from './KalturaESearchUserParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ESearchSearchUserActionArgs extends KalturaRequestArgs {
    searchParams: KalturaESearchUserParams;
    pager?: KalturaPager;
}
/**
 * Build request payload for service 'eSearch' action 'searchUser'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
export declare class ESearchSearchUserAction extends KalturaRequest<KalturaESearchResponse> {
    searchParams: KalturaESearchUserParams;
    pager: KalturaPager;
    constructor(data: ESearchSearchUserActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
