import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaCancelReplaceActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'media' action 'cancelReplace'.
 *
 * Usage: Cancels media replacement
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaCancelReplaceAction extends KalturaRequest<KalturaMediaEntry> {
    entryId: string;
    constructor(data: MediaCancelReplaceActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}