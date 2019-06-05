/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaQuestionCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaQuestionCuePointBaseFilterArgs.prototype.questionLike;
/** @type {?|undefined} */
KalturaQuestionCuePointBaseFilterArgs.prototype.questionMultiLikeOr;
/** @type {?|undefined} */
KalturaQuestionCuePointBaseFilterArgs.prototype.questionMultiLikeAnd;
var KalturaQuestionCuePointBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaQuestionCuePointBaseFilter, _super);
    function KalturaQuestionCuePointBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaQuestionCuePointBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaQuestionCuePointBaseFilter' },
            questionLike: { type: 's' },
            questionMultiLikeOr: { type: 's' },
            questionMultiLikeAnd: { type: 's' }
        });
        return result;
    };
    return KalturaQuestionCuePointBaseFilter;
}(KalturaCuePointFilter));
export { KalturaQuestionCuePointBaseFilter };
if (false) {
    /** @type {?} */
    KalturaQuestionCuePointBaseFilter.prototype.questionLike;
    /** @type {?} */
    KalturaQuestionCuePointBaseFilter.prototype.questionMultiLikeOr;
    /** @type {?} */
    KalturaQuestionCuePointBaseFilter.prototype.questionMultiLikeAnd;
}
typesMappingStorage['KalturaQuestionCuePointBaseFilter'] = KalturaQuestionCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVF1ZXN0aW9uQ3VlUG9pbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUXVlc3Rpb25DdWVQb2ludEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztBQVMzRixJQUFBO0lBQXVELDZEQUFxQjtJQU14RSwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM1QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQW5DTDtFQVd1RCxxQkFBcUIsRUF5QjNFLENBQUE7QUF6QkQsNkNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludEZpbHRlciwgS2FsdHVyYUN1ZVBvaW50RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUXVlc3Rpb25DdWVQb2ludEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3Mge1xuICAgIHF1ZXN0aW9uTGlrZT8gOiBzdHJpbmc7XG5cdHF1ZXN0aW9uTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRxdWVzdGlvbk11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFRdWVzdGlvbkN1ZVBvaW50QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlciB7XG5cbiAgICBxdWVzdGlvbkxpa2UgOiBzdHJpbmc7XG5cdHF1ZXN0aW9uTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHF1ZXN0aW9uTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUXVlc3Rpb25DdWVQb2ludEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVF1ZXN0aW9uQ3VlUG9pbnRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRxdWVzdGlvbkxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cXVlc3Rpb25NdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRxdWVzdGlvbk11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUXVlc3Rpb25DdWVQb2ludEJhc2VGaWx0ZXInXSA9IEthbHR1cmFRdWVzdGlvbkN1ZVBvaW50QmFzZUZpbHRlcjsiXX0=