import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaString } from './KalturaString';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';
export interface KalturaAnswerCuePointArgs extends KalturaCuePointArgs {
    parentId?: string;
    quizUserEntryId?: string;
    answerKey?: string;
}
export declare class KalturaAnswerCuePoint extends KalturaCuePoint {
    parentId: string;
    quizUserEntryId: string;
    answerKey: string;
    readonly isCorrect: KalturaNullableBoolean;
    readonly correctAnswerKeys: KalturaString[];
    readonly explanation: string;
    constructor(data?: KalturaAnswerCuePointArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}