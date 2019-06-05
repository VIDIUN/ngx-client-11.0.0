import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylistListResponse } from './KalturaPlaylistListResponse';
import { KalturaPlaylistFilter } from './KalturaPlaylistFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlaylistListActionArgs extends KalturaRequestArgs {
    filter?: KalturaPlaylistFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'playlist' action 'list'.
 *
 * Usage: List available playlists
 *
 * Server response type:         KalturaPlaylistListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class PlaylistListAction extends KalturaRequest<KalturaPlaylistListResponse> {
    filter: KalturaPlaylistFilter;
    pager: KalturaFilterPager;
    constructor(data?: PlaylistListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
