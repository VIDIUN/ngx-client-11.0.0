import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackContext } from './KalturaPlaybackContext';
import { KalturaPlaybackContextOptions } from './KalturaPlaybackContextOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryGetPlaybackContextActionArgs extends KalturaRequestArgs {
    entryId: string;
    contextDataParams: KalturaPlaybackContextOptions;
}
/**
 * Build request payload for service 'baseEntry' action 'getPlaybackContext'.
 *
 * Usage: This action delivers all data relevant for player
 *
 * Server response type:         KalturaPlaybackContext
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryGetPlaybackContextAction extends KalturaRequest<KalturaPlaybackContext> {
    entryId: string;
    contextDataParams: KalturaPlaybackContextOptions;
    constructor(data: BaseEntryGetPlaybackContextActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}