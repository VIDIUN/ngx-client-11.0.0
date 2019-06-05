/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaReportInputBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaReportInputBaseFilterArgs.prototype.fromDate;
/** @type {?|undefined} */
KalturaReportInputBaseFilterArgs.prototype.toDate;
/** @type {?|undefined} */
KalturaReportInputBaseFilterArgs.prototype.fromDay;
/** @type {?|undefined} */
KalturaReportInputBaseFilterArgs.prototype.toDay;
var KalturaReportInputBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaReportInputBaseFilter, _super);
    function KalturaReportInputBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaReportInputBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaReportInputBaseFilter' },
            fromDate: { type: 'n' },
            toDate: { type: 'n' },
            fromDay: { type: 's' },
            toDay: { type: 's' }
        });
        return result;
    };
    return KalturaReportInputBaseFilter;
}(KalturaObjectBase));
export { KalturaReportInputBaseFilter };
if (false) {
    /** @type {?} */
    KalturaReportInputBaseFilter.prototype.fromDate;
    /** @type {?} */
    KalturaReportInputBaseFilter.prototype.toDate;
    /** @type {?} */
    KalturaReportInputBaseFilter.prototype.fromDay;
    /** @type {?} */
    KalturaReportInputBaseFilter.prototype.toDay;
}
typesMappingStorage['KalturaReportInputBaseFilter'] = KalturaReportInputBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsSUFBQTtJQUFrRCx3REFBaUI7SUFPL0Qsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0F0Q0w7RUFZa0QsaUJBQWlCLEVBMkJsRSxDQUFBO0FBM0JELHdDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVwb3J0SW5wdXRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGZyb21EYXRlPyA6IG51bWJlcjtcblx0dG9EYXRlPyA6IG51bWJlcjtcblx0ZnJvbURheT8gOiBzdHJpbmc7XG5cdHRvRGF5PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVJlcG9ydElucHV0QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGZyb21EYXRlIDogbnVtYmVyO1xuXHR0b0RhdGUgOiBudW1iZXI7XG5cdGZyb21EYXkgOiBzdHJpbmc7XG5cdHRvRGF5IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVwb3J0SW5wdXRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZXBvcnRJbnB1dEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGZyb21EYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRvRGF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmcm9tRGF5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRvRGF5IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZXBvcnRJbnB1dEJhc2VGaWx0ZXInXSA9IEthbHR1cmFSZXBvcnRJbnB1dEJhc2VGaWx0ZXI7Il19