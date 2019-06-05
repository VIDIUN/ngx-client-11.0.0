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
export function KalturaAnswerCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAnswerCuePointBaseFilterArgs.prototype.parentIdEqual;
/** @type {?|undefined} */
KalturaAnswerCuePointBaseFilterArgs.prototype.parentIdIn;
/** @type {?|undefined} */
KalturaAnswerCuePointBaseFilterArgs.prototype.quizUserEntryIdEqual;
/** @type {?|undefined} */
KalturaAnswerCuePointBaseFilterArgs.prototype.quizUserEntryIdIn;
var KalturaAnswerCuePointBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAnswerCuePointBaseFilter, _super);
    function KalturaAnswerCuePointBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAnswerCuePointBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAnswerCuePointBaseFilter' },
            parentIdEqual: { type: 's' },
            parentIdIn: { type: 's' },
            quizUserEntryIdEqual: { type: 's' },
            quizUserEntryIdIn: { type: 's' }
        });
        return result;
    };
    return KalturaAnswerCuePointBaseFilter;
}(KalturaCuePointFilter));
export { KalturaAnswerCuePointBaseFilter };
if (false) {
    /** @type {?} */
    KalturaAnswerCuePointBaseFilter.prototype.parentIdEqual;
    /** @type {?} */
    KalturaAnswerCuePointBaseFilter.prototype.parentIdIn;
    /** @type {?} */
    KalturaAnswerCuePointBaseFilter.prototype.quizUserEntryIdEqual;
    /** @type {?} */
    KalturaAnswerCuePointBaseFilter.prototype.quizUserEntryIdIn;
}
typesMappingStorage['KalturaAnswerCuePointBaseFilter'] = KalturaAnswerCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFuc3dlckN1ZVBvaW50QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFuc3dlckN1ZVBvaW50QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVM0YsSUFBQTtJQUFxRCwyREFBcUI7SUFPdEUseUNBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0Isb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQXRDTDtFQVlxRCxxQkFBcUIsRUEyQnpFLENBQUE7QUEzQkQsMkNBMkJDOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50RmlsdGVyLCBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBbnN3ZXJDdWVQb2ludEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3Mge1xuICAgIHBhcmVudElkRXF1YWw/IDogc3RyaW5nO1xuXHRwYXJlbnRJZEluPyA6IHN0cmluZztcblx0cXVpelVzZXJFbnRyeUlkRXF1YWw/IDogc3RyaW5nO1xuXHRxdWl6VXNlckVudHJ5SWRJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBbnN3ZXJDdWVQb2ludEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIge1xuXG4gICAgcGFyZW50SWRFcXVhbCA6IHN0cmluZztcblx0cGFyZW50SWRJbiA6IHN0cmluZztcblx0cXVpelVzZXJFbnRyeUlkRXF1YWwgOiBzdHJpbmc7XG5cdHF1aXpVc2VyRW50cnlJZEluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQW5zd2VyQ3VlUG9pbnRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBbnN3ZXJDdWVQb2ludEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdHBhcmVudElkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyZW50SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRxdWl6VXNlckVudHJ5SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRxdWl6VXNlckVudHJ5SWRJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQW5zd2VyQ3VlUG9pbnRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQW5zd2VyQ3VlUG9pbnRCYXNlRmlsdGVyOyJdfQ==