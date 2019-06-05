/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaAccessControlBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAccessControlBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaAccessControlBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaAccessControlBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaAccessControlBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaAccessControlBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAccessControlBaseFilterArgs.prototype.createdAtLessThanOrEqual;
var KalturaAccessControlBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControlBaseFilter, _super);
    function KalturaAccessControlBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControlBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    };
    return KalturaAccessControlBaseFilter;
}(KalturaRelatedFilter));
export { KalturaAccessControlBaseFilter };
if (false) {
    /** @type {?} */
    KalturaAccessControlBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaAccessControlBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaAccessControlBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaAccessControlBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaAccessControlBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaAccessControlBaseFilter.prototype.createdAtLessThanOrEqual;
}
typesMappingStorage['KalturaAccessControlBaseFilter'] = KalturaAccessControlBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQWNjZXNzQ29udHJvbEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVl4RixJQUFBO0lBQW9ELDBEQUFvQjtJQVNwRSx3Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQTVDTDtFQWNvRCxvQkFBb0IsRUErQnZFLENBQUE7QUEvQkQsMENBK0JDOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWNjZXNzQ29udHJvbEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBY2Nlc3NDb250cm9sQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbCA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWNjZXNzQ29udHJvbEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2xCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBY2Nlc3NDb250cm9sQmFzZUZpbHRlciddID0gS2FsdHVyYUFjY2Vzc0NvbnRyb2xCYXNlRmlsdGVyOyJdfQ==