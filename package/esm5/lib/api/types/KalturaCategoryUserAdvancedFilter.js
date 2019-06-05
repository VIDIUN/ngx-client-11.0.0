/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaCategoryUserAdvancedFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryUserAdvancedFilterArgs.prototype.memberIdEq;
/** @type {?|undefined} */
KalturaCategoryUserAdvancedFilterArgs.prototype.memberIdIn;
/** @type {?|undefined} */
KalturaCategoryUserAdvancedFilterArgs.prototype.memberPermissionsMatchOr;
/** @type {?|undefined} */
KalturaCategoryUserAdvancedFilterArgs.prototype.memberPermissionsMatchAnd;
var KalturaCategoryUserAdvancedFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryUserAdvancedFilter, _super);
    function KalturaCategoryUserAdvancedFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryUserAdvancedFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryUserAdvancedFilter' },
            memberIdEq: { type: 's' },
            memberIdIn: { type: 's' },
            memberPermissionsMatchOr: { type: 's' },
            memberPermissionsMatchAnd: { type: 's' }
        });
        return result;
    };
    return KalturaCategoryUserAdvancedFilter;
}(KalturaSearchItem));
export { KalturaCategoryUserAdvancedFilter };
if (false) {
    /** @type {?} */
    KalturaCategoryUserAdvancedFilter.prototype.memberIdEq;
    /** @type {?} */
    KalturaCategoryUserAdvancedFilter.prototype.memberIdIn;
    /** @type {?} */
    KalturaCategoryUserAdvancedFilter.prototype.memberPermissionsMatchOr;
    /** @type {?} */
    KalturaCategoryUserAdvancedFilter.prototype.memberPermissionsMatchAnd;
}
typesMappingStorage['KalturaCategoryUserAdvancedFilter'] = KalturaCategoryUserAdvancedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5VXNlckFkdmFuY2VkRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnlVc2VyQWR2YW5jZWRGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVS9FLElBQUE7SUFBdUQsNkRBQWlCO0lBT3BFLDJDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0F0Q0w7RUFZdUQsaUJBQWlCLEVBMkJ2RSxDQUFBO0FBM0JELDZDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hJdGVtLCBLYWx0dXJhU2VhcmNoSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2F0ZWdvcnlVc2VyQWR2YW5jZWRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtQXJncyB7XG4gICAgbWVtYmVySWRFcT8gOiBzdHJpbmc7XG5cdG1lbWJlcklkSW4/IDogc3RyaW5nO1xuXHRtZW1iZXJQZXJtaXNzaW9uc01hdGNoT3I/IDogc3RyaW5nO1xuXHRtZW1iZXJQZXJtaXNzaW9uc01hdGNoQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhdGVnb3J5VXNlckFkdmFuY2VkRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW0ge1xuXG4gICAgbWVtYmVySWRFcSA6IHN0cmluZztcblx0bWVtYmVySWRJbiA6IHN0cmluZztcblx0bWVtYmVyUGVybWlzc2lvbnNNYXRjaE9yIDogc3RyaW5nO1xuXHRtZW1iZXJQZXJtaXNzaW9uc01hdGNoQW5kIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyQWR2YW5jZWRGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhdGVnb3J5VXNlckFkdmFuY2VkRmlsdGVyJyB9LFxuXHRcdFx0XHRtZW1iZXJJZEVxIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lbWJlcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVtYmVyUGVybWlzc2lvbnNNYXRjaE9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lbWJlclBlcm1pc3Npb25zTWF0Y2hBbmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNhdGVnb3J5VXNlckFkdmFuY2VkRmlsdGVyJ10gPSBLYWx0dXJhQ2F0ZWdvcnlVc2VyQWR2YW5jZWRGaWx0ZXI7Il19