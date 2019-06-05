import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface QuizGetActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'quiz' action 'get'.
 *
 * Usage: Allows to get a quiz
 *
 * Server response type:         KalturaQuiz
 * Server failure response type: KalturaAPIException
 */
export declare class QuizGetAction extends KalturaRequest<KalturaQuiz> {
    entryId: string;
    constructor(data: QuizGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
