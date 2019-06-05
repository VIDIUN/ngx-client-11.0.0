import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlaylistGetActionArgs extends KalturaRequestArgs {
    id: string;
    version?: number;
}
/**
 * Build request payload for service 'playlist' action 'get'.
 *
 * Usage: Retrieve a playlist
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
export declare class PlaylistGetAction extends KalturaRequest<KalturaPlaylist> {
    id: string;
    version: number;
    constructor(data: PlaylistGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}