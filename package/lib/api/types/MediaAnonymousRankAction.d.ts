import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaAnonymousRankActionArgs extends KalturaRequestArgs {
    entryId: string;
    rank: number;
}
/**
 * Build request payload for service 'media' action 'anonymousRank'.
 *
 * Usage: Anonymously rank a media entry, no validation is done on duplicate rankings
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class MediaAnonymousRankAction extends KalturaRequest<void> {
    entryId: string;
    rank: number;
    constructor(data: MediaAnonymousRankActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}