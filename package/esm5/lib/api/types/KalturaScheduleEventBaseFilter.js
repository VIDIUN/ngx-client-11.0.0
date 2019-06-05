/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaScheduleEventBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduleEventBaseFilter, _super);
    function KalturaScheduleEventBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScheduleEventBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaScheduleEventBaseFilter;
}(KalturaRelatedFilter));
export { KalturaScheduleEventBaseFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ3hGLElBQUE7SUFBb0QsMERBQW9CO0lBZ0NwRSx3Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQ3RILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUMsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQzlJLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQW5ITDtFQXVDb0Qsb0JBQW9CLEVBNkV2RSxDQUFBO0FBN0VELDBDQTZFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGUgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTY2hlZHVsZUV2ZW50QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGlkTm90SW4/IDogc3RyaW5nO1xuXHRwYXJlbnRJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFyZW50SWRJbj8gOiBzdHJpbmc7XG5cdHBhcmVudElkTm90SW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRzdGFydERhdGVHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0c3RhcnREYXRlTGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdGVuZERhdGVHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0ZW5kRGF0ZUxlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRyZWZlcmVuY2VJZEVxdWFsPyA6IHN0cmluZztcblx0cmVmZXJlbmNlSWRJbj8gOiBzdHJpbmc7XG5cdG93bmVySWRFcXVhbD8gOiBzdHJpbmc7XG5cdG93bmVySWRJbj8gOiBzdHJpbmc7XG5cdHByaW9yaXR5RXF1YWw/IDogbnVtYmVyO1xuXHRwcmlvcml0eUluPyA6IHN0cmluZztcblx0cHJpb3JpdHlHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRwcmlvcml0eUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHJlY3VycmVuY2VUeXBlRXF1YWw/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlVHlwZTtcblx0cmVjdXJyZW5jZVR5cGVJbj8gOiBzdHJpbmc7XG5cdHRhZ3NMaWtlPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRpZE5vdEluIDogc3RyaW5nO1xuXHRwYXJlbnRJZEVxdWFsIDogbnVtYmVyO1xuXHRwYXJlbnRJZEluIDogc3RyaW5nO1xuXHRwYXJlbnRJZE5vdEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFTY2hlZHVsZUV2ZW50U3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0c3RhcnREYXRlR3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0c3RhcnREYXRlTGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0ZW5kRGF0ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGVuZERhdGVMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRyZWZlcmVuY2VJZEVxdWFsIDogc3RyaW5nO1xuXHRyZWZlcmVuY2VJZEluIDogc3RyaW5nO1xuXHRvd25lcklkRXF1YWwgOiBzdHJpbmc7XG5cdG93bmVySWRJbiA6IHN0cmluZztcblx0cHJpb3JpdHlFcXVhbCA6IG51bWJlcjtcblx0cHJpb3JpdHlJbiA6IHN0cmluZztcblx0cHJpb3JpdHlHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHByaW9yaXR5TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRyZWN1cnJlbmNlVHlwZUVxdWFsIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZWN1cnJlbmNlVHlwZTtcblx0cmVjdXJyZW5jZVR5cGVJbiA6IHN0cmluZztcblx0dGFnc0xpa2UgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyZW50SWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJlbnRJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudElkTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnREYXRlR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHN0YXJ0RGF0ZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRlbmREYXRlR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGVuZERhdGVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0cmVmZXJlbmNlSWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWZlcmVuY2VJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG93bmVySWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvd25lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpb3JpdHlFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcmlvcml0eUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByaW9yaXR5R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaW9yaXR5TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlY3VycmVuY2VUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlY3VycmVuY2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVjdXJyZW5jZVR5cGUnIH0sXG5cdFx0XHRcdHJlY3VycmVuY2VUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc0xpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTY2hlZHVsZUV2ZW50QmFzZUZpbHRlciddID0gS2FsdHVyYVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyOyJdfQ==