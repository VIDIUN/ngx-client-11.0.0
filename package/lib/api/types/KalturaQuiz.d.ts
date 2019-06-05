import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaQuizArgs extends KalturaObjectBaseArgs {
    uiAttributes?: KalturaKeyValue[];
    showResultOnAnswer?: KalturaNullableBoolean;
    showCorrectKeyOnAnswer?: KalturaNullableBoolean;
    allowAnswerUpdate?: KalturaNullableBoolean;
    showCorrectAfterSubmission?: KalturaNullableBoolean;
    allowDownload?: KalturaNullableBoolean;
    showGradeAfterSubmission?: KalturaNullableBoolean;
}
export declare class KalturaQuiz extends KalturaObjectBase {
    readonly version: number;
    uiAttributes: KalturaKeyValue[];
    showResultOnAnswer: KalturaNullableBoolean;
    showCorrectKeyOnAnswer: KalturaNullableBoolean;
    allowAnswerUpdate: KalturaNullableBoolean;
    showCorrectAfterSubmission: KalturaNullableBoolean;
    allowDownload: KalturaNullableBoolean;
    showGradeAfterSubmission: KalturaNullableBoolean;
    constructor(data?: KalturaQuizArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
