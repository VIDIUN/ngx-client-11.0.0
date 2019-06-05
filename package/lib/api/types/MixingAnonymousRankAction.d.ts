import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingAnonymousRankActionArgs extends KalturaRequestArgs {
    entryId: string;
    rank: number;
}
/**
 * Build request payload for service 'mixing' action 'anonymousRank'.
 *
 * Usage: Anonymously rank a mix entry, no validation is done on duplicate rankings
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class MixingAnonymousRankAction extends KalturaRequest<void> {
    entryId: string;
    rank: number;
    constructor(data: MixingAnonymousRankActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
