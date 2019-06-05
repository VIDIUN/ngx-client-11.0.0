import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface QuizUpdateActionArgs extends KalturaRequestArgs {
    entryId: string;
    quiz: KalturaQuiz;
}
/**
 * Build request payload for service 'quiz' action 'update'.
 *
 * Usage: Allows to update a quiz
 *
 * Server response type:         KalturaQuiz
 * Server failure response type: KalturaAPIException
 */
export declare class QuizUpdateAction extends KalturaRequest<KalturaQuiz> {
    entryId: string;
    quiz: KalturaQuiz;
    constructor(data: QuizUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}