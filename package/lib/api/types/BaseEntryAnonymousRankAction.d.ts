import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryAnonymousRankActionArgs extends KalturaRequestArgs {
    entryId: string;
    rank: number;
}
/**
 * Build request payload for service 'baseEntry' action 'anonymousRank'.
 *
 * Usage: Anonymously rank an entry, no validation is done on duplicate rankings
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryAnonymousRankAction extends KalturaRequest<void> {
    entryId: string;
    rank: number;
    constructor(data: BaseEntryAnonymousRankActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}