import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlaylistExecuteFromFiltersActionArgs extends KalturaRequestArgs {
    filters: KalturaMediaEntryFilterForPlaylist[];
    totalResults: number;
    detailed?: string;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'playlist' action 'executeFromFilters'.
 *
 * Usage: Revrieve playlist for playing purpose, based on media entry filters
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
export declare class PlaylistExecuteFromFiltersAction extends KalturaRequest<KalturaBaseEntry[]> {
    filters: KalturaMediaEntryFilterForPlaylist[];
    totalResults: number;
    detailed: string;
    pager: KalturaFilterPager;
    constructor(data: PlaylistExecuteFromFiltersActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}