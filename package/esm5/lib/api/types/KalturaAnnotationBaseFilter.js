/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaAnnotationBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.parentIdEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.parentIdIn;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.textLike;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.textMultiLikeOr;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.textMultiLikeAnd;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.endTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.endTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.durationGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.durationLessThanOrEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.isPublicEqual;
var KalturaAnnotationBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAnnotationBaseFilter, _super);
    function KalturaAnnotationBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAnnotationBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAnnotationBaseFilter' },
            parentIdEqual: { type: 's' },
            parentIdIn: { type: 's' },
            textLike: { type: 's' },
            textMultiLikeOr: { type: 's' },
            textMultiLikeAnd: { type: 's' },
            endTimeGreaterThanOrEqual: { type: 'n' },
            endTimeLessThanOrEqual: { type: 'n' },
            durationGreaterThanOrEqual: { type: 'n' },
            durationLessThanOrEqual: { type: 'n' },
            isPublicEqual: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaAnnotationBaseFilter;
}(KalturaCuePointFilter));
export { KalturaAnnotationBaseFilter };
if (false) {
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.parentIdEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.parentIdIn;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.textLike;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.textMultiLikeOr;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.textMultiLikeAnd;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.endTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.endTimeLessThanOrEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.durationGreaterThanOrEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.durationLessThanOrEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.isPublicEqual;
}
typesMappingStorage['KalturaAnnotationBaseFilter'] = KalturaAnnotationBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFubm90YXRpb25CYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQW5ub3RhdGlvbkJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IzRixJQUFBO0lBQWlELHVEQUFxQjtJQWFsRSxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUN2RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQXpETDtFQW1CaUQscUJBQXFCLEVBdUNyRSxDQUFBO0FBdkNELHVDQXVDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50RmlsdGVyLCBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBbm5vdGF0aW9uQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50RmlsdGVyQXJncyB7XG4gICAgcGFyZW50SWRFcXVhbD8gOiBzdHJpbmc7XG5cdHBhcmVudElkSW4/IDogc3RyaW5nO1xuXHR0ZXh0TGlrZT8gOiBzdHJpbmc7XG5cdHRleHRNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRleHRNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRlbmRUaW1lR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGR1cmF0aW9uR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZHVyYXRpb25MZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRpc1B1YmxpY0VxdWFsPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBbm5vdGF0aW9uQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlciB7XG5cbiAgICBwYXJlbnRJZEVxdWFsIDogc3RyaW5nO1xuXHRwYXJlbnRJZEluIDogc3RyaW5nO1xuXHR0ZXh0TGlrZSA6IHN0cmluZztcblx0dGV4dE11bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0ZXh0TXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRlbmRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRlbmRUaW1lTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZHVyYXRpb25MZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGlzUHVibGljRXF1YWwgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQW5ub3RhdGlvbkJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFubm90YXRpb25CYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRwYXJlbnRJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGV4dExpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGV4dE11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRleHRNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5kVGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbmRUaW1lTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlzUHVibGljRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBbm5vdGF0aW9uQmFzZUZpbHRlciddID0gS2FsdHVyYUFubm90YXRpb25CYXNlRmlsdGVyOyJdfQ==