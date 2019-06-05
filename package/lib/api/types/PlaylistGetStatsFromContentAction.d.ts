import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';
import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlaylistGetStatsFromContentActionArgs extends KalturaRequestArgs {
    playlistType: KalturaPlaylistType;
    playlistContent: string;
}
/**
 * Build request payload for service 'playlist' action 'getStatsFromContent'.
 *
 * Usage: Retrieve playlist statistics
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
export declare class PlaylistGetStatsFromContentAction extends KalturaRequest<KalturaPlaylist> {
    playlistType: KalturaPlaylistType;
    playlistContent: string;
    constructor(data: PlaylistGetStatsFromContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
