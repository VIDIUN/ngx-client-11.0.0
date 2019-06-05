/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaOptionalAnswer } from './KalturaOptionalAnswer';
import { KalturaQuestionType } from './KalturaQuestionType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePoint } from './KalturaCuePoint';
/**
 * @record
 */
export function KalturaQuestionCuePointArgs() { }
/** @type {?|undefined} */
KalturaQuestionCuePointArgs.prototype.optionalAnswers;
/** @type {?|undefined} */
KalturaQuestionCuePointArgs.prototype.hint;
/** @type {?|undefined} */
KalturaQuestionCuePointArgs.prototype.question;
/** @type {?|undefined} */
KalturaQuestionCuePointArgs.prototype.explanation;
/** @type {?|undefined} */
KalturaQuestionCuePointArgs.prototype.questionType;
/** @type {?|undefined} */
KalturaQuestionCuePointArgs.prototype.presentationOrder;
/** @type {?|undefined} */
KalturaQuestionCuePointArgs.prototype.excludeFromScore;
var KalturaQuestionCuePoint = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaQuestionCuePoint, _super);
    function KalturaQuestionCuePoint(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.optionalAnswers === 'undefined')
            _this.optionalAnswers = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaQuestionCuePoint.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaQuestionCuePoint' },
            optionalAnswers: { type: 'a', subTypeConstructor: KalturaOptionalAnswer, subType: 'KalturaOptionalAnswer' },
            hint: { type: 's' },
            question: { type: 's' },
            explanation: { type: 's' },
            questionType: { type: 'en', subTypeConstructor: KalturaQuestionType, subType: 'KalturaQuestionType' },
            presentationOrder: { type: 'n' },
            excludeFromScore: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaQuestionCuePoint;
}(KalturaCuePoint));
export { KalturaQuestionCuePoint };
if (false) {
    /** @type {?} */
    KalturaQuestionCuePoint.prototype.optionalAnswers;
    /** @type {?} */
    KalturaQuestionCuePoint.prototype.hint;
    /** @type {?} */
    KalturaQuestionCuePoint.prototype.question;
    /** @type {?} */
    KalturaQuestionCuePoint.prototype.explanation;
    /** @type {?} */
    KalturaQuestionCuePoint.prototype.questionType;
    /** @type {?} */
    KalturaQuestionCuePoint.prototype.presentationOrder;
    /** @type {?} */
    KalturaQuestionCuePoint.prototype.excludeFromScore;
}
typesMappingStorage['KalturaQuestionCuePoint'] = KalturaQuestionCuePoint;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVF1ZXN0aW9uQ3VlUG9pbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFRdWVzdGlvbkN1ZVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQXVCLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhekUsSUFBQTtJQUE2QyxtREFBZTtJQVV4RCxpQ0FBWSxJQUFtQztRQUEvQyxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDOztLQUM5RTs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQy9HLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3pHLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQzFHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBbkRMO0VBa0I2QyxlQUFlLEVBa0MzRCxDQUFBO0FBbENELG1DQWtDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPcHRpb25hbEFuc3dlciB9IGZyb20gJy4vS2FsdHVyYU9wdGlvbmFsQW5zd2VyJztcbmltcG9ydCB7IEthbHR1cmFRdWVzdGlvblR5cGUgfSBmcm9tICcuL0thbHR1cmFRdWVzdGlvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnQsIEthbHR1cmFDdWVQb2ludEFyZ3MgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVF1ZXN0aW9uQ3VlUG9pbnRBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEFyZ3Mge1xuICAgIG9wdGlvbmFsQW5zd2Vycz8gOiBLYWx0dXJhT3B0aW9uYWxBbnN3ZXJbXTtcblx0aGludD8gOiBzdHJpbmc7XG5cdHF1ZXN0aW9uPyA6IHN0cmluZztcblx0ZXhwbGFuYXRpb24/IDogc3RyaW5nO1xuXHRxdWVzdGlvblR5cGU/IDogS2FsdHVyYVF1ZXN0aW9uVHlwZTtcblx0cHJlc2VudGF0aW9uT3JkZXI/IDogbnVtYmVyO1xuXHRleGNsdWRlRnJvbVNjb3JlPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFRdWVzdGlvbkN1ZVBvaW50IGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50IHtcblxuICAgIG9wdGlvbmFsQW5zd2VycyA6IEthbHR1cmFPcHRpb25hbEFuc3dlcltdO1xuXHRoaW50IDogc3RyaW5nO1xuXHRxdWVzdGlvbiA6IHN0cmluZztcblx0ZXhwbGFuYXRpb24gOiBzdHJpbmc7XG5cdHF1ZXN0aW9uVHlwZSA6IEthbHR1cmFRdWVzdGlvblR5cGU7XG5cdHByZXNlbnRhdGlvbk9yZGVyIDogbnVtYmVyO1xuXHRleGNsdWRlRnJvbVNjb3JlIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVF1ZXN0aW9uQ3VlUG9pbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25hbEFuc3dlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9wdGlvbmFsQW5zd2VycyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFRdWVzdGlvbkN1ZVBvaW50JyB9LFxuXHRcdFx0XHRvcHRpb25hbEFuc3dlcnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFPcHRpb25hbEFuc3dlciwgc3ViVHlwZSA6ICdLYWx0dXJhT3B0aW9uYWxBbnN3ZXInIH0sXG5cdFx0XHRcdGhpbnQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cXVlc3Rpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXhwbGFuYXRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cXVlc3Rpb25UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVF1ZXN0aW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUXVlc3Rpb25UeXBlJyB9LFxuXHRcdFx0XHRwcmVzZW50YXRpb25PcmRlciA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRleGNsdWRlRnJvbVNjb3JlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUXVlc3Rpb25DdWVQb2ludCddID0gS2FsdHVyYVF1ZXN0aW9uQ3VlUG9pbnQ7Il19