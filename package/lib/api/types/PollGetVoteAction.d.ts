import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PollGetVoteActionArgs extends KalturaRequestArgs {
    pollId: string;
    userId: string;
}
/**
 * Build request payload for service 'poll' action 'getVote'.
 *
 * Usage: Vote Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class PollGetVoteAction extends KalturaRequest<string> {
    pollId: string;
    userId: string;
    constructor(data: PollGetVoteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
