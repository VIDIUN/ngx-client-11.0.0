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
export function KalturaAccessControlProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAccessControlProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaAccessControlProfileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaAccessControlProfileBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaAccessControlProfileBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaAccessControlProfileBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAccessControlProfileBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaAccessControlProfileBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAccessControlProfileBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
var KalturaAccessControlProfileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControlProfileBaseFilter, _super);
    function KalturaAccessControlProfileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControlProfileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlProfileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    };
    return KalturaAccessControlProfileBaseFilter;
}(KalturaRelatedFilter));
export { KalturaAccessControlProfileBaseFilter };
if (false) {
    /** @type {?} */
    KalturaAccessControlProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaAccessControlProfileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaAccessControlProfileBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaAccessControlProfileBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaAccessControlProfileBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaAccessControlProfileBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaAccessControlProfileBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaAccessControlProfileBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaAccessControlProfileBaseFilter'] = KalturaAccessControlProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN4RixJQUFBO0lBQTJELGlFQUFvQjtJQVczRSwrQ0FBWSxJQUFpRDtlQUV6RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDREQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1lBQzFGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0RBbERMO0VBZ0IyRCxvQkFBb0IsRUFtQzlFLENBQUE7QUFuQ0QsaURBbUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMsR0FBRyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciwgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZUJhc2VGaWx0ZXI7Il19