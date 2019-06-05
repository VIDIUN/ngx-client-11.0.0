import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuizListResponse } from './KalturaQuizListResponse';
import { KalturaQuizFilter } from './KalturaQuizFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface QuizListActionArgs extends KalturaRequestArgs {
    filter?: KalturaQuizFilter;
    pager?: KalturaFilterPager;
}
/**
 * Build request payload for service 'quiz' action 'list'.
 *
 * Usage: List quiz objects by filter and pager
 *
 * Server response type:         KalturaQuizListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class QuizListAction extends KalturaRequest<KalturaQuizListResponse> {
    filter: KalturaQuizFilter;
    pager: KalturaFilterPager;
    constructor(data?: QuizListActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}