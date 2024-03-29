import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaContext } from './KalturaContext';
import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlaylistExecuteActionArgs extends KalturaRequestArgs {
    id: string;
    detailed?: string;
    playlistContext?: KalturaContext;
    filter?: KalturaMediaEntryFilterForPlaylist;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'playlist' action 'execute'.
 *
 * Usage: Retrieve playlist for playing purpose
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
export declare class PlaylistExecuteAction extends KalturaRequest<KalturaBaseEntry[]> {
    id: string;
    detailed: string;
    playlistContext: KalturaContext;
    filter: KalturaMediaEntryFilterForPlaylist;
    pager: KalturaFilterPager;
    constructor(data: PlaylistExecuteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
