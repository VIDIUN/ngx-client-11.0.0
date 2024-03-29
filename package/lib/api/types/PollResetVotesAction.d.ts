import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PollResetVotesActionArgs extends KalturaRequestArgs {
    pollId: string;
}
/**
 * Build request payload for service 'poll' action 'resetVotes'.
 *
 * Usage: Get resetVotes Action
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class PollResetVotesAction extends KalturaRequest<void> {
    pollId: string;
    constructor(data: PollResetVotesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
