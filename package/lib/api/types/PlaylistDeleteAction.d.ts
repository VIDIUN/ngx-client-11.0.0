import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlaylistDeleteActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'playlist' action 'delete'.
 *
 * Usage: Delete existing playlist
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class PlaylistDeleteAction extends KalturaRequest<void> {
    id: string;
    constructor(data: PlaylistDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
