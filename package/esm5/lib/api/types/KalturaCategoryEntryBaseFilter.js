/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaCategoryEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.categoryIdEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.categoryIdIn;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.categoryFullIdsStartsWith;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.creatorUserIdEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.creatorUserIdIn;
var KalturaCategoryEntryBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryEntryBaseFilter, _super);
    function KalturaCategoryEntryBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryEntryBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryEntryBaseFilter' },
            categoryIdEqual: { type: 'n' },
            categoryIdIn: { type: 's' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            categoryFullIdsStartsWith: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaCategoryEntryStatus, subType: 'KalturaCategoryEntryStatus' },
            statusIn: { type: 's' },
            creatorUserIdEqual: { type: 's' },
            creatorUserIdIn: { type: 's' }
        });
        return result;
    };
    return KalturaCategoryEntryBaseFilter;
}(KalturaRelatedFilter));
export { KalturaCategoryEntryBaseFilter };
if (false) {
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.categoryIdEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.categoryIdIn;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.categoryFullIdsStartsWith;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.creatorUserIdEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.creatorUserIdIn;
}
typesMappingStorage['KalturaCategoryEntryBaseFilter'] = KalturaCategoryEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5RW50cnlCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnlFbnRyeUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhGLElBQUE7SUFBb0QsMERBQW9CO0lBY3BFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUN0SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBNURMO0VBb0JvRCxvQkFBb0IsRUF5Q3ZFLENBQUE7QUF6Q0QsMENBeUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXRlZ29yeUVudHJ5QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBjYXRlZ29yeUlkRXF1YWw/IDogbnVtYmVyO1xuXHRjYXRlZ29yeUlkSW4/IDogc3RyaW5nO1xuXHRlbnRyeUlkRXF1YWw/IDogc3RyaW5nO1xuXHRlbnRyeUlkSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNhdGVnb3J5RnVsbElkc1N0YXJ0c1dpdGg/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRjcmVhdG9yVXNlcklkRXF1YWw/IDogc3RyaW5nO1xuXHRjcmVhdG9yVXNlcklkSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2F0ZWdvcnlFbnRyeUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBjYXRlZ29yeUlkRXF1YWwgOiBudW1iZXI7XG5cdGNhdGVnb3J5SWRJbiA6IHN0cmluZztcblx0ZW50cnlJZEVxdWFsIDogc3RyaW5nO1xuXHRlbnRyeUlkSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNhdGVnb3J5RnVsbElkc1N0YXJ0c1dpdGggOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRjcmVhdG9yVXNlcklkRXF1YWwgOiBzdHJpbmc7XG5cdGNyZWF0b3JVc2VySWRJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhdGVnb3J5RW50cnlCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXRlZ29yeUVudHJ5QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0Y2F0ZWdvcnlJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y2F0ZWdvcnlGdWxsSWRzU3RhcnRzV2l0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeUVudHJ5U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeUVudHJ5U3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdG9yVXNlcklkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRvclVzZXJJZEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXRlZ29yeUVudHJ5QmFzZUZpbHRlciddID0gS2FsdHVyYUNhdGVnb3J5RW50cnlCYXNlRmlsdGVyOyJdfQ==