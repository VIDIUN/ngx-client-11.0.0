import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PollVoteActionArgs extends KalturaRequestArgs {
    pollId: string;
    userId: string;
    answerIds: string;
}
/**
 * Build request payload for service 'poll' action 'vote'.
 *
 * Usage: Vote Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class PollVoteAction extends KalturaRequest<string> {
    pollId: string;
    userId: string;
    answerIds: string;
    constructor(data: PollVoteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
