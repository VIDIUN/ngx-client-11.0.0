/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryEntryAdvancedOrderBy } from './KalturaCategoryEntryAdvancedOrderBy';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaCategoryEntryAdvancedFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryEntryAdvancedFilterArgs.prototype.categoriesMatchOr;
/** @type {?|undefined} */
KalturaCategoryEntryAdvancedFilterArgs.prototype.categoryEntryStatusIn;
/** @type {?|undefined} */
KalturaCategoryEntryAdvancedFilterArgs.prototype.orderBy;
/** @type {?|undefined} */
KalturaCategoryEntryAdvancedFilterArgs.prototype.categoryIdEqual;
var KalturaCategoryEntryAdvancedFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryEntryAdvancedFilter, _super);
    function KalturaCategoryEntryAdvancedFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryEntryAdvancedFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryEntryAdvancedFilter' },
            categoriesMatchOr: { type: 's' },
            categoryEntryStatusIn: { type: 's' },
            orderBy: { type: 'es', subTypeConstructor: KalturaCategoryEntryAdvancedOrderBy, subType: 'KalturaCategoryEntryAdvancedOrderBy' },
            categoryIdEqual: { type: 'n' }
        });
        return result;
    };
    return KalturaCategoryEntryAdvancedFilter;
}(KalturaSearchItem));
export { KalturaCategoryEntryAdvancedFilter };
if (false) {
    /** @type {?} */
    KalturaCategoryEntryAdvancedFilter.prototype.categoriesMatchOr;
    /** @type {?} */
    KalturaCategoryEntryAdvancedFilter.prototype.categoryEntryStatusIn;
    /** @type {?} */
    KalturaCategoryEntryAdvancedFilter.prototype.orderBy;
    /** @type {?} */
    KalturaCategoryEntryAdvancedFilter.prototype.categoryIdEqual;
}
typesMappingStorage['KalturaCategoryEntryAdvancedFilter'] = KalturaCategoryEntryAdvancedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZEZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVL0UsSUFBQTtJQUF3RCw4REFBaUI7SUFPckUsNENBQVksSUFBOEM7ZUFFdEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUNBQW1DLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3BJLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0F2Q0w7RUFhd0QsaUJBQWlCLEVBMkJ4RSxDQUFBO0FBM0JELDhDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeUVudHJ5QWR2YW5jZWRPcmRlckJ5IH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlFbnRyeUFkdmFuY2VkT3JkZXJCeSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoSXRlbSwgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIHtcbiAgICBjYXRlZ29yaWVzTWF0Y2hPcj8gOiBzdHJpbmc7XG5cdGNhdGVnb3J5RW50cnlTdGF0dXNJbj8gOiBzdHJpbmc7XG5cdG9yZGVyQnk/IDogS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZE9yZGVyQnk7XG5cdGNhdGVnb3J5SWRFcXVhbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXRlZ29yeUVudHJ5QWR2YW5jZWRGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbSB7XG5cbiAgICBjYXRlZ29yaWVzTWF0Y2hPciA6IHN0cmluZztcblx0Y2F0ZWdvcnlFbnRyeVN0YXR1c0luIDogc3RyaW5nO1xuXHRvcmRlckJ5IDogS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZE9yZGVyQnk7XG5cdGNhdGVnb3J5SWRFcXVhbCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2F0ZWdvcnlFbnRyeUFkdmFuY2VkRmlsdGVyJyB9LFxuXHRcdFx0XHRjYXRlZ29yaWVzTWF0Y2hPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUVudHJ5U3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3JkZXJCeSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeUVudHJ5QWR2YW5jZWRPcmRlckJ5LCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeUVudHJ5QWR2YW5jZWRPcmRlckJ5JyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZEZpbHRlciddID0gS2FsdHVyYUNhdGVnb3J5RW50cnlBZHZhbmNlZEZpbHRlcjsiXX0=