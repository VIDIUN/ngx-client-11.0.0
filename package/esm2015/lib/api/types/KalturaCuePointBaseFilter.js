/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaCuePointBaseFilter extends KalturaRelatedFilter {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDeEYsTUFBTSxnQ0FBaUMsU0FBUSxvQkFBb0I7Ozs7SUErQi9ELFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQzlHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDNUcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDZCQUE2QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGtDQUFrQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuRCwrQkFBK0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDakgsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludFR5cGUgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciwgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUN1ZVBvaW50QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IHN0cmluZztcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGN1ZVBvaW50VHlwZUVxdWFsPyA6IEthbHR1cmFDdWVQb2ludFR5cGU7XG5cdGN1ZVBvaW50VHlwZUluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUN1ZVBvaW50U3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdGVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGVudHJ5SWRJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR0cmlnZ2VyZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR0cmlnZ2VyZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR0YWdzTGlrZT8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRzdGFydFRpbWVHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRzdGFydFRpbWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHR1c2VySWRFcXVhbD8gOiBzdHJpbmc7XG5cdHVzZXJJZEluPyA6IHN0cmluZztcblx0cGFydG5lclNvcnRWYWx1ZUVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lclNvcnRWYWx1ZUluPyA6IHN0cmluZztcblx0cGFydG5lclNvcnRWYWx1ZUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJTb3J0VmFsdWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRmb3JjZVN0b3BFcXVhbD8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzeXN0ZW1OYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ3VlUG9pbnRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IHN0cmluZztcblx0aWRJbiA6IHN0cmluZztcblx0Y3VlUG9pbnRUeXBlRXF1YWwgOiBLYWx0dXJhQ3VlUG9pbnRUeXBlO1xuXHRjdWVQb2ludFR5cGVJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhQ3VlUG9pbnRTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRlbnRyeUlkRXF1YWwgOiBzdHJpbmc7XG5cdGVudHJ5SWRJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dHJpZ2dlcmVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR0cmlnZ2VyZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHRhZ3NMaWtlIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdHN0YXJ0VGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0c3RhcnRUaW1lTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHR1c2VySWRFcXVhbCA6IHN0cmluZztcblx0dXNlcklkSW4gOiBzdHJpbmc7XG5cdHBhcnRuZXJTb3J0VmFsdWVFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lclNvcnRWYWx1ZUluIDogc3RyaW5nO1xuXHRwYXJ0bmVyU29ydFZhbHVlR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVyU29ydFZhbHVlTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRmb3JjZVN0b3BFcXVhbCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHN5c3RlbU5hbWVFcXVhbCA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ3VlUG9pbnRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDdWVQb2ludEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjdWVQb2ludFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDdWVQb2ludFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50VHlwZScgfSxcblx0XHRcdFx0Y3VlUG9pbnRUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ3VlUG9pbnRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50U3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR0cmlnZ2VyZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR0cmlnZ2VyZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR0YWdzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGFydFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhcnRUaW1lTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJTb3J0VmFsdWVFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVyU29ydFZhbHVlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lclNvcnRWYWx1ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVyU29ydFZhbHVlTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZvcmNlU3RvcEVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDdWVQb2ludEJhc2VGaWx0ZXInXSA9IEthbHR1cmFDdWVQb2ludEJhc2VGaWx0ZXI7Il19