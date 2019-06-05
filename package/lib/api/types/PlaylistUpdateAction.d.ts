import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlaylistUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    playlist: KalturaPlaylist;
    updateStats?: boolean;
}
/**
 * Build request payload for service 'playlist' action 'update'.
 *
 * Usage: Update existing playlist
 * Note - you cannot change playlist type. updated playlist must be of the same type
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
export declare class PlaylistUpdateAction extends KalturaRequest<KalturaPlaylist> {
    id: string;
    playlist: KalturaPlaylist;
    updateStats: boolean;
    constructor(data: PlaylistUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
