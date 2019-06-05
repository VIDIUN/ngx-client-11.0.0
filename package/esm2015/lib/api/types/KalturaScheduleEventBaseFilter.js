/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventStatus } from './KalturaScheduleEventStatus';
import { KalturaScheduleEventRecurrenceType } from './KalturaScheduleEventRecurrenceType';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaScheduleEventBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.idNotIn;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.parentIdEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.parentIdIn;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.parentIdNotIn;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.startDateGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.startDateLessThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.endDateGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.endDateLessThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.referenceIdEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.referenceIdIn;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.ownerIdEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.ownerIdIn;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.priorityEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.priorityIn;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.priorityGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.priorityLessThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.recurrenceTypeEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.recurrenceTypeIn;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.tagsLike;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
export class KalturaScheduleEventBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaScheduleEventBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            idNotIn: { type: 's' },
            parentIdEqual: { type: 'n' },
            parentIdIn: { type: 's' },
            parentIdNotIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaScheduleEventStatus, subType: 'KalturaScheduleEventStatus' },
            statusIn: { type: 's' },
            startDateGreaterThanOrEqual: { type: 'd' },
            startDateLessThanOrEqual: { type: 'd' },
            endDateGreaterThanOrEqual: { type: 'd' },
            endDateLessThanOrEqual: { type: 'd' },
            referenceIdEqual: { type: 's' },
            referenceIdIn: { type: 's' },
            ownerIdEqual: { type: 's' },
            ownerIdIn: { type: 's' },
            priorityEqual: { type: 'n' },
            priorityIn: { type: 's' },
            priorityGreaterThanOrEqual: { type: 'n' },
            priorityLessThanOrEqual: { type: 'n' },
            recurrenceTypeEqual: { type: 'en', subTypeConstructor: KalturaScheduleEventRecurrenceType, subType: 'KalturaScheduleEventRecurrenceType' },
            recurrenceTypeIn: { type: 's' },
            tagsLike: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.idNotIn;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.parentIdEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.parentIdIn;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.parentIdNotIn;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.startDateGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.startDateLessThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.endDateGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.endDateLessThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.referenceIdEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.referenceIdIn;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.ownerIdEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.ownerIdIn;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.priorityEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.priorityIn;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.priorityGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.priorityLessThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.recurrenceTypeEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.recurrenceTypeIn;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.tagsLike;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaScheduleEventBaseFilter'] = KalturaScheduleEventBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DeEYsTUFBTSxxQ0FBc0MsU0FBUSxvQkFBb0I7Ozs7SUFnQ3BFLFlBQVksSUFBMEM7UUFFbEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQ3RILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUMsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQzlJLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRpZE5vdEluPyA6IHN0cmluZztcblx0cGFyZW50SWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcmVudElkSW4/IDogc3RyaW5nO1xuXHRwYXJlbnRJZE5vdEluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0c3RhcnREYXRlR3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHN0YXJ0RGF0ZUxlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRlbmREYXRlR3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGVuZERhdGVMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0cmVmZXJlbmNlSWRFcXVhbD8gOiBzdHJpbmc7XG5cdHJlZmVyZW5jZUlkSW4/IDogc3RyaW5nO1xuXHRvd25lcklkRXF1YWw/IDogc3RyaW5nO1xuXHRvd25lcklkSW4/IDogc3RyaW5nO1xuXHRwcmlvcml0eUVxdWFsPyA6IG51bWJlcjtcblx0cHJpb3JpdHlJbj8gOiBzdHJpbmc7XG5cdHByaW9yaXR5R3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cHJpb3JpdHlMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRyZWN1cnJlbmNlVHlwZUVxdWFsPyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGU7XG5cdHJlY3VycmVuY2VUeXBlSW4/IDogc3RyaW5nO1xuXHR0YWdzTGlrZT8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0aWROb3RJbiA6IHN0cmluZztcblx0cGFyZW50SWRFcXVhbCA6IG51bWJlcjtcblx0cGFyZW50SWRJbiA6IHN0cmluZztcblx0cGFyZW50SWROb3RJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHN0YXJ0RGF0ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHN0YXJ0RGF0ZUxlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGVuZERhdGVHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRlbmREYXRlTGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0cmVmZXJlbmNlSWRFcXVhbCA6IHN0cmluZztcblx0cmVmZXJlbmNlSWRJbiA6IHN0cmluZztcblx0b3duZXJJZEVxdWFsIDogc3RyaW5nO1xuXHRvd25lcklkSW4gOiBzdHJpbmc7XG5cdHByaW9yaXR5RXF1YWwgOiBudW1iZXI7XG5cdHByaW9yaXR5SW4gOiBzdHJpbmc7XG5cdHByaW9yaXR5R3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRwcmlvcml0eUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cmVjdXJyZW5jZVR5cGVFcXVhbCA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGU7XG5cdHJlY3VycmVuY2VUeXBlSW4gOiBzdHJpbmc7XG5cdHRhZ3NMaWtlIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudElkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFyZW50SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRJZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXJ0RGF0ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRzdGFydERhdGVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0ZW5kRGF0ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRlbmREYXRlTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVmZXJlbmNlSWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvd25lcklkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3duZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByaW9yaXR5RXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJpb3JpdHlJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcmlvcml0eUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcmlvcml0eUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWN1cnJlbmNlVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VUeXBlJyB9LFxuXHRcdFx0XHRyZWN1cnJlbmNlVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXInXSA9IEthbHR1cmFTY2hlZHVsZUV2ZW50QmFzZUZpbHRlcjsiXX0=