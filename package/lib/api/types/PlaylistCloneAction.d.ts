import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlaylistCloneActionArgs extends KalturaRequestArgs {
    id: string;
    newPlaylist?: KalturaPlaylist;
}
/**
 * Build request payload for service 'playlist' action 'clone'.
 *
 * Usage: Clone an existing playlist
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
export declare class PlaylistCloneAction extends KalturaRequest<KalturaPlaylist> {
    id: string;
    newPlaylist: KalturaPlaylist;
    constructor(data: PlaylistCloneActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
