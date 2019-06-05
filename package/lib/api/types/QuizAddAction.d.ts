import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface QuizAddActionArgs extends KalturaRequestArgs {
    entryId: string;
    quiz: KalturaQuiz;
}
/**
 * Build request payload for service 'quiz' action 'add'.
 *
 * Usage: Allows to add a quiz to an entry
 *
 * Server response type:         KalturaQuiz
 * Server failure response type: KalturaAPIException
 */
export declare class QuizAddAction extends KalturaRequest<KalturaQuiz> {
    entryId: string;
    quiz: KalturaQuiz;
    constructor(data: QuizAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
