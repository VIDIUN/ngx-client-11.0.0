import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SearchGetMediaInfoActionArgs extends KalturaRequestArgs {
    searchResult: KalturaSearchResult;
}
/**
 * Build request payload for service 'search' action 'getMediaInfo'.
 *
 * Usage: Retrieve extra information about media found in search action
 * Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields
 *
 * Server response type:         KalturaSearchResult
 * Server failure response type: KalturaAPIException
 */
export declare class SearchGetMediaInfoAction extends KalturaRequest<KalturaSearchResult> {
    searchResult: KalturaSearchResult;
    constructor(data: SearchGetMediaInfoActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
