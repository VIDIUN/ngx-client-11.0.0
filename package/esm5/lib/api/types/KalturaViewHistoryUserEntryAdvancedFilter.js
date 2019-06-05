/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaViewHistoryUserEntryAdvancedFilterArgs() { }
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.extendedStatusEqual;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryAdvancedFilterArgs.prototype.extendedStatusIn;
var KalturaViewHistoryUserEntryAdvancedFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaViewHistoryUserEntryAdvancedFilter, _super);
    function KalturaViewHistoryUserEntryAdvancedFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaViewHistoryUserEntryAdvancedFilter' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            updatedAtGreaterThanOrEqual: { type: 's' },
            updatedAtLessThanOrEqual: { type: 's' },
            extendedStatusEqual: { type: 'es', subTypeConstructor: KalturaUserEntryExtendedStatus, subType: 'KalturaUserEntryExtendedStatus' },
            extendedStatusIn: { type: 's' }
        });
        return result;
    };
    return KalturaViewHistoryUserEntryAdvancedFilter;
}(KalturaSearchItem));
export { KalturaViewHistoryUserEntryAdvancedFilter };
if (false) {
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.idEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.idIn;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.extendedStatusEqual;
    /** @type {?} */
    KalturaViewHistoryUserEntryAdvancedFilter.prototype.extendedStatusIn;
}
typesMappingStorage['KalturaViewHistoryUserEntryAdvancedFilter'] = KalturaViewHistoryUserEntryAdvancedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5QWR2YW5jZWRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeUFkdmFuY2VkRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYy9FLElBQUE7SUFBK0QscUVBQWlCO0lBVzVFLG1EQUFZLElBQXFEO2VBRTdELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDOUYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDdEksZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0RBbkRMO0VBaUIrRCxpQkFBaUIsRUFtQy9FLENBQUE7QUFuQ0QscURBbUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoSXRlbSwgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5QWR2YW5jZWRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtQXJncyB7XG4gICAgaWRFcXVhbD8gOiBzdHJpbmc7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHR1c2VySWRFcXVhbD8gOiBzdHJpbmc7XG5cdHVzZXJJZEluPyA6IHN0cmluZztcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IHN0cmluZztcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IHN0cmluZztcblx0ZXh0ZW5kZWRTdGF0dXNFcXVhbD8gOiBLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXM7XG5cdGV4dGVuZGVkU3RhdHVzSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVmlld0hpc3RvcnlVc2VyRW50cnlBZHZhbmNlZEZpbHRlciBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtIHtcblxuICAgIGlkRXF1YWwgOiBzdHJpbmc7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdHVzZXJJZEVxdWFsIDogc3RyaW5nO1xuXHR1c2VySWRJbiA6IHN0cmluZztcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogc3RyaW5nO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBzdHJpbmc7XG5cdGV4dGVuZGVkU3RhdHVzRXF1YWwgOiBLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXM7XG5cdGV4dGVuZGVkU3RhdHVzSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeUFkdmFuY2VkRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeUFkdmFuY2VkRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRleHRlbmRlZFN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cycgfSxcblx0XHRcdFx0ZXh0ZW5kZWRTdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVmlld0hpc3RvcnlVc2VyRW50cnlBZHZhbmNlZEZpbHRlciddID0gS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5QWR2YW5jZWRGaWx0ZXI7Il19