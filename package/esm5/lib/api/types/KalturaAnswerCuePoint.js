/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaString } from './KalturaString';
import { KalturaCuePoint } from './KalturaCuePoint';
/**
 * @record
 */
export function KalturaAnswerCuePointArgs() { }
/** @type {?|undefined} */
KalturaAnswerCuePointArgs.prototype.parentId;
/** @type {?|undefined} */
KalturaAnswerCuePointArgs.prototype.quizUserEntryId;
/** @type {?|undefined} */
KalturaAnswerCuePointArgs.prototype.answerKey;
var KalturaAnswerCuePoint = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAnswerCuePoint, _super);
    function KalturaAnswerCuePoint(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.correctAnswerKeys === 'undefined')
            _this.correctAnswerKeys = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaAnswerCuePoint.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAnswerCuePoint' },
            parentId: { type: 's' },
            quizUserEntryId: { type: 's' },
            answerKey: { type: 's' },
            isCorrect: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            correctAnswerKeys: { type: 'a', readOnly: true, subTypeConstructor: KalturaString, subType: 'KalturaString' },
            explanation: { type: 's', readOnly: true }
        });
        return result;
    };
    return KalturaAnswerCuePoint;
}(KalturaCuePoint));
export { KalturaAnswerCuePoint };
if (false) {
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.parentId;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.quizUserEntryId;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.answerKey;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.isCorrect;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.correctAnswerKeys;
    /** @type {?} */
    KalturaAnswerCuePoint.prototype.explanation;
}
typesMappingStorage['KalturaAnswerCuePoint'] = KalturaAnswerCuePoint;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFuc3dlckN1ZVBvaW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQW5zd2VyQ3VlUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQXVCLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7O0FBU3pFLElBQUE7SUFBMkMsaURBQWU7SUFTdEQsK0JBQVksSUFBaUM7UUFBN0MsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGlCQUFpQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7O0tBQ2xGOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUM3SCxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsSCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDcEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0E1Q0w7RUFhMkMsZUFBZSxFQWdDekQsQ0FBQTtBQWhDRCxpQ0FnQ0M7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludCwgS2FsdHVyYUN1ZVBvaW50QXJncyB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQW5zd2VyQ3VlUG9pbnRBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEFyZ3Mge1xuICAgIHBhcmVudElkPyA6IHN0cmluZztcblx0cXVpelVzZXJFbnRyeUlkPyA6IHN0cmluZztcblx0YW5zd2VyS2V5PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFuc3dlckN1ZVBvaW50IGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50IHtcblxuICAgIHBhcmVudElkIDogc3RyaW5nO1xuXHRxdWl6VXNlckVudHJ5SWQgOiBzdHJpbmc7XG5cdGFuc3dlcktleSA6IHN0cmluZztcblx0cmVhZG9ubHkgaXNDb3JyZWN0IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVhZG9ubHkgY29ycmVjdEFuc3dlcktleXMgOiBLYWx0dXJhU3RyaW5nW107XG5cdHJlYWRvbmx5IGV4cGxhbmF0aW9uIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQW5zd2VyQ3VlUG9pbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb3JyZWN0QW5zd2VyS2V5cyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29ycmVjdEFuc3dlcktleXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQW5zd2VyQ3VlUG9pbnQnIH0sXG5cdFx0XHRcdHBhcmVudElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHF1aXpVc2VyRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbnN3ZXJLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNDb3JyZWN0IDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGNvcnJlY3RBbnN3ZXJLZXlzIDogeyB0eXBlIDogJ2EnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZycgfSxcblx0XHRcdFx0ZXhwbGFuYXRpb24gOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQW5zd2VyQ3VlUG9pbnQnXSA9IEthbHR1cmFBbnN3ZXJDdWVQb2ludDsiXX0=