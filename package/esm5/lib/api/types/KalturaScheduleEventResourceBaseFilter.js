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
export function KalturaScheduleEventResourceBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaScheduleEventResourceBaseFilterArgs.prototype.eventIdEqual;
/** @type {?|undefined} */
KalturaScheduleEventResourceBaseFilterArgs.prototype.eventIdIn;
/** @type {?|undefined} */
KalturaScheduleEventResourceBaseFilterArgs.prototype.resourceIdEqual;
/** @type {?|undefined} */
KalturaScheduleEventResourceBaseFilterArgs.prototype.resourceIdIn;
/** @type {?|undefined} */
KalturaScheduleEventResourceBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventResourceBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventResourceBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleEventResourceBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
var KalturaScheduleEventResourceBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduleEventResourceBaseFilter, _super);
    function KalturaScheduleEventResourceBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScheduleEventResourceBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduleEventResourceBaseFilter' },
            eventIdEqual: { type: 'n' },
            eventIdIn: { type: 's' },
            resourceIdEqual: { type: 'n' },
            resourceIdIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    };
    return KalturaScheduleEventResourceBaseFilter;
}(KalturaRelatedFilter));
export { KalturaScheduleEventResourceBaseFilter };
if (false) {
    /** @type {?} */
    KalturaScheduleEventResourceBaseFilter.prototype.eventIdEqual;
    /** @type {?} */
    KalturaScheduleEventResourceBaseFilter.prototype.eventIdIn;
    /** @type {?} */
    KalturaScheduleEventResourceBaseFilter.prototype.resourceIdEqual;
    /** @type {?} */
    KalturaScheduleEventResourceBaseFilter.prototype.resourceIdIn;
    /** @type {?} */
    KalturaScheduleEventResourceBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventResourceBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventResourceBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleEventResourceBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaScheduleEventResourceBaseFilter'] = KalturaScheduleEventResourceBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3hGLElBQUE7SUFBNEQsa0VBQW9CO0lBVzVFLGdEQUFZLElBQWtEO2VBRTFELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDM0YsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpREFsREw7RUFnQjRELG9CQUFvQixFQW1DL0UsQ0FBQTtBQW5DRCxrREFtQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBldmVudElkRXF1YWw/IDogbnVtYmVyO1xuXHRldmVudElkSW4/IDogc3RyaW5nO1xuXHRyZXNvdXJjZUlkRXF1YWw/IDogbnVtYmVyO1xuXHRyZXNvdXJjZUlkSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBldmVudElkRXF1YWwgOiBudW1iZXI7XG5cdGV2ZW50SWRJbiA6IHN0cmluZztcblx0cmVzb3VyY2VJZEVxdWFsIDogbnVtYmVyO1xuXHRyZXNvdXJjZUlkSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRldmVudElkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXZlbnRJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc291cmNlSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZXNvdXJjZUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VCYXNlRmlsdGVyJ10gPSBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlQmFzZUZpbHRlcjsiXX0=