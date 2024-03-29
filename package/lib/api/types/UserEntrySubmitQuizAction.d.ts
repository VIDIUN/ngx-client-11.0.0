import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuizUserEntry } from './KalturaQuizUserEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserEntrySubmitQuizActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'userEntry' action 'submitQuiz'.
 *
 * Usage: Submits the quiz so that it's status will be submitted and calculates the score for the quiz
 *
 * Server response type:         KalturaQuizUserEntry
 * Server failure response type: KalturaAPIException
 */
export declare class UserEntrySubmitQuizAction extends KalturaRequest<KalturaQuizUserEntry> {
    id: number;
    constructor(data: UserEntrySubmitQuizActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
