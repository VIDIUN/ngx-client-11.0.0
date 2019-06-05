/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePointType } from './KalturaCuePointType';
import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.cuePointTypeEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.cuePointTypeIn;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.triggeredAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.triggeredAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.tagsLike;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.startTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.startTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.partnerSortValueEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.partnerSortValueIn;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.partnerSortValueGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.partnerSortValueLessThanOrEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.forceStopEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaCuePointBaseFilterArgs.prototype.systemNameIn;
var KalturaCuePointBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCuePointBaseFilter, _super);
    function KalturaCuePointBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCuePointBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCuePointBaseFilter' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            cuePointTypeEqual: { type: 'es', subTypeConstructor: KalturaCuePointType, subType: 'KalturaCuePointType' },
            cuePointTypeIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaCuePointStatus, subType: 'KalturaCuePointStatus' },
            statusIn: { type: 's' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            triggeredAtGreaterThanOrEqual: { type: 'd' },
            triggeredAtLessThanOrEqual: { type: 'd' },
            tagsLike: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            startTimeGreaterThanOrEqual: { type: 'n' },
            startTimeLessThanOrEqual: { type: 'n' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            partnerSortValueEqual: { type: 'n' },
            partnerSortValueIn: { type: 's' },
            partnerSortValueGreaterThanOrEqual: { type: 'n' },
            partnerSortValueLessThanOrEqual: { type: 'n' },
            forceStopEqual: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' }
        });
        return result;
    };
    return KalturaCuePointBaseFilter;
}(KalturaRelatedFilter));
export { KalturaCuePointBaseFilter };
if (false) {
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.cuePointTypeEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.cuePointTypeIn;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.triggeredAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.triggeredAtLessThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.tagsLike;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.startTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.startTimeLessThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.partnerSortValueEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.partnerSortValueIn;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.partnerSortValueGreaterThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.partnerSortValueLessThanOrEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.forceStopEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaCuePointBaseFilter.prototype.systemNameIn;
}
typesMappingStorage['KalturaCuePointBaseFilter'] = KalturaCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ3hGLElBQUE7SUFBK0MscURBQW9CO0lBK0IvRCxtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQzlHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDNUcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDZCQUE2QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGtDQUFrQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuRCwrQkFBK0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDakgsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBakhMO0VBdUMrQyxvQkFBb0IsRUEyRWxFLENBQUE7QUEzRUQscUNBMkVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50VHlwZSB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ3VlUG9pbnRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogc3RyaW5nO1xuXHRpZEluPyA6IHN0cmluZztcblx0Y3VlUG9pbnRUeXBlRXF1YWw/IDogS2FsdHVyYUN1ZVBvaW50VHlwZTtcblx0Y3VlUG9pbnRUeXBlSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQ3VlUG9pbnRTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0ZW50cnlJZEVxdWFsPyA6IHN0cmluZztcblx0ZW50cnlJZEluPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHRyaWdnZXJlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHRyaWdnZXJlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHRhZ3NMaWtlPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdHN0YXJ0VGltZUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHN0YXJ0VGltZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHVzZXJJZEVxdWFsPyA6IHN0cmluZztcblx0dXNlcklkSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVyU29ydFZhbHVlRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVyU29ydFZhbHVlSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVyU29ydFZhbHVlR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lclNvcnRWYWx1ZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGZvcmNlU3RvcEVxdWFsPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHN5c3RlbU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDdWVQb2ludEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogc3RyaW5nO1xuXHRpZEluIDogc3RyaW5nO1xuXHRjdWVQb2ludFR5cGVFcXVhbCA6IEthbHR1cmFDdWVQb2ludFR5cGU7XG5cdGN1ZVBvaW50VHlwZUluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFDdWVQb2ludFN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdGVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0ZW50cnlJZEluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR0cmlnZ2VyZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHRyaWdnZXJlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dGFnc0xpa2UgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0c3RhcnRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRzdGFydFRpbWVMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHVzZXJJZEVxdWFsIDogc3RyaW5nO1xuXHR1c2VySWRJbiA6IHN0cmluZztcblx0cGFydG5lclNvcnRWYWx1ZUVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVyU29ydFZhbHVlSW4gOiBzdHJpbmc7XG5cdHBhcnRuZXJTb3J0VmFsdWVHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJTb3J0VmFsdWVMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGZvcmNlU3RvcEVxdWFsIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0c3lzdGVtTmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDdWVQb2ludEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGN1ZVBvaW50VHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUN1ZVBvaW50VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ3VlUG9pbnRUeXBlJyB9LFxuXHRcdFx0XHRjdWVQb2ludFR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDdWVQb2ludFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ3VlUG9pbnRTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHRyaWdnZXJlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHRyaWdnZXJlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHRhZ3NMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXJ0VGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGFydFRpbWVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXNlcklkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lclNvcnRWYWx1ZUVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJTb3J0VmFsdWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyU29ydFZhbHVlR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJTb3J0VmFsdWVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zm9yY2VTdG9wRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlciddID0gS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlcjsiXX0=