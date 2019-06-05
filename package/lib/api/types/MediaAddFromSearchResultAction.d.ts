import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaAddFromSearchResultActionArgs extends KalturaRequestArgs {
    mediaEntry?: KalturaMediaEntry;
    searchResult?: KalturaSearchResult;
}
/**
 * Build request payload for service 'media' action 'addFromSearchResult'.
 *
 * Usage: Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaAddFromSearchResultAction extends KalturaRequest<KalturaMediaEntry> {
    mediaEntry: KalturaMediaEntry;
    searchResult: KalturaSearchResult;
    constructor(data?: MediaAddFromSearchResultActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
