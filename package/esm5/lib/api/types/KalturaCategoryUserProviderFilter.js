/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaCategoryUserProviderFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.updateMethodEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.updateMethodIn;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.permissionNamesMatchAnd;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.permissionNamesMatchOr;
var KalturaCategoryUserProviderFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryUserProviderFilter, _super);
    function KalturaCategoryUserProviderFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryUserProviderFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCategoryUserProviderFilter' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaCategoryUserStatus, subType: 'KalturaCategoryUserStatus' },
            statusIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'n' },
            createdAtLessThanOrEqual: { type: 'n' },
            updatedAtGreaterThanOrEqual: { type: 'n' },
            updatedAtLessThanOrEqual: { type: 'n' },
            updateMethodEqual: { type: 'en', subTypeConstructor: KalturaUpdateMethodType, subType: 'KalturaUpdateMethodType' },
            updateMethodIn: { type: 's' },
            permissionNamesMatchAnd: { type: 's' },
            permissionNamesMatchOr: { type: 's' }
        });
        return result;
    };
    return KalturaCategoryUserProviderFilter;
}(KalturaFilter));
export { KalturaCategoryUserProviderFilter };
if (false) {
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.statusIn;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.updateMethodEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.updateMethodIn;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.permissionNamesMatchAnd;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.permissionNamesMatchOr;
}
typesMappingStorage['KalturaCategoryUserProviderFilter'] = KalturaCategoryUserProviderFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5VXNlclByb3ZpZGVyRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnlVc2VyUHJvdmlkZXJGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQm5FLElBQUE7SUFBdUQsNkRBQWE7SUFlaEUsMkNBQVksSUFBNkM7ZUFFckQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx3REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDcEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUN0SCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0FoRUw7RUFzQnVELGFBQWEsRUEyQ25FLENBQUE7QUEzQ0QsNkNBMkNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVVwZGF0ZU1ldGhvZFR5cGUgfSBmcm9tICcuL0thbHR1cmFVcGRhdGVNZXRob2RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2F0ZWdvcnlVc2VyUHJvdmlkZXJGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICB1c2VySWRFcXVhbD8gOiBzdHJpbmc7XG5cdHVzZXJJZEluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUNhdGVnb3J5VXNlclN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHR1cGRhdGVNZXRob2RFcXVhbD8gOiBLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZTtcblx0dXBkYXRlTWV0aG9kSW4/IDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXNNYXRjaEFuZD8gOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc01hdGNoT3I/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2F0ZWdvcnlVc2VyUHJvdmlkZXJGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIHVzZXJJZEVxdWFsIDogc3RyaW5nO1xuXHR1c2VySWRJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHR1cGRhdGVNZXRob2RFcXVhbCA6IEthbHR1cmFVcGRhdGVNZXRob2RUeXBlO1xuXHR1cGRhdGVNZXRob2RJbiA6IHN0cmluZztcblx0cGVybWlzc2lvbk5hbWVzTWF0Y2hBbmQgOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc01hdGNoT3IgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeVVzZXJQcm92aWRlckZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyUHJvdmlkZXJGaWx0ZXInIH0sXG5cdFx0XHRcdHVzZXJJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5VXNlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXBkYXRlTWV0aG9kRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZScgfSxcblx0XHRcdFx0dXBkYXRlTWV0aG9kSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbk5hbWVzTWF0Y2hBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbk5hbWVzTWF0Y2hPciA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlVc2VyUHJvdmlkZXJGaWx0ZXInXSA9IEthbHR1cmFDYXRlZ29yeVVzZXJQcm92aWRlckZpbHRlcjsiXX0=