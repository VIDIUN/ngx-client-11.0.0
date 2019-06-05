import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlaylistExecuteFromContentActionArgs extends KalturaRequestArgs {
    playlistType: KalturaPlaylistType;
    playlistContent: string;
    detailed?: string;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'playlist' action 'executeFromContent'.
 *
 * Usage: Retrieve playlist for playing purpose, based on content
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
export declare class PlaylistExecuteFromContentAction extends KalturaRequest<KalturaBaseEntry[]> {
    playlistType: KalturaPlaylistType;
    playlistContent: string;
    detailed: string;
    pager: KalturaFilterPager;
    constructor(data: PlaylistExecuteFromContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
