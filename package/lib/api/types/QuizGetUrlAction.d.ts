import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuizOutputType } from './KalturaQuizOutputType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface QuizGetUrlActionArgs extends KalturaRequestArgs {
    entryId: string;
    quizOutputType: KalturaQuizOutputType;
}
/**
 * Build request payload for service 'quiz' action 'getUrl'.
 *
 * Usage: sends a with an api request for pdf from quiz object
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class QuizGetUrlAction extends KalturaRequest<string> {
    entryId: string;
    quizOutputType: KalturaQuizOutputType;
    constructor(data: QuizGetUrlActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
