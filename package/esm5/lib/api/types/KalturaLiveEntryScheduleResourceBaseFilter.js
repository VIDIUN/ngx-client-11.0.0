/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResourceFilter } from './KalturaScheduleResourceFilter';
/**
 * @record
 */
export function KalturaLiveEntryScheduleResourceBaseFilterArgs() { }
var KalturaLiveEntryScheduleResourceBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveEntryScheduleResourceBaseFilter, _super);
    function KalturaLiveEntryScheduleResourceBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveEntryScheduleResourceBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveEntryScheduleResourceBaseFilter' }
        });
        return result;
    };
    return KalturaLiveEntryScheduleResourceBaseFilter;
}(KalturaScheduleResourceFilter));
export { KalturaLiveEntryScheduleResourceBaseFilter };
typesMappingStorage['KalturaLiveEntryScheduleResourceBaseFilter'] = KalturaLiveEntryScheduleResourceBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeVNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZUVudHJ5U2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFxQyxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQU9uSCxJQUFBO0lBQWdFLHNFQUE2QjtJQUl6RixvREFBWSxJQUFzRDtlQUU5RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBNUJMO0VBU2dFLDZCQUE2QixFQW9CNUYsQ0FBQTtBQXBCRCxzREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyw0Q0FBNEMsQ0FBQyxHQUFHLDBDQUEwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZVJlc291cmNlRmlsdGVyLCBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZVJlc291cmNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZUVudHJ5U2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTY2hlZHVsZVJlc291cmNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlRW50cnlTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFTY2hlZHVsZVJlc291cmNlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZUVudHJ5U2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVFbnRyeVNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZUVudHJ5U2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFMaXZlRW50cnlTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlcjsiXX0=