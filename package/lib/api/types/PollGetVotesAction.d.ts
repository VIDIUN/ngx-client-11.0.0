import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PollGetVotesActionArgs extends KalturaRequestArgs {
    pollId: string;
    answerIds: string;
}
/**
 * Build request payload for service 'poll' action 'getVotes'.
 *
 * Usage: Get Votes Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class PollGetVotesAction extends KalturaRequest<string> {
    pollId: string;
    answerIds: string;
    constructor(data: PollGetVotesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
