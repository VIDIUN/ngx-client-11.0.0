/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaGenericDistributionProviderActionBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.genericDistributionProviderIdEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.genericDistributionProviderIdIn;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.actionEqual;
/** @type {?|undefined} */
KalturaGenericDistributionProviderActionBaseFilterArgs.prototype.actionIn;
var KalturaGenericDistributionProviderActionBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericDistributionProviderActionBaseFilter, _super);
    function KalturaGenericDistributionProviderActionBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericDistributionProviderActionBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericDistributionProviderActionBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            genericDistributionProviderIdEqual: { type: 'n' },
            genericDistributionProviderIdIn: { type: 's' },
            actionEqual: { type: 'en', subTypeConstructor: KalturaDistributionAction, subType: 'KalturaDistributionAction' },
            actionIn: { type: 's' }
        });
        return result;
    };
    return KalturaGenericDistributionProviderActionBaseFilter;
}(KalturaFilter));
export { KalturaGenericDistributionProviderActionBaseFilter };
if (false) {
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.genericDistributionProviderIdEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.genericDistributionProviderIdIn;
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.actionEqual;
    /** @type {?} */
    KalturaGenericDistributionProviderActionBaseFilter.prototype.actionIn;
}
typesMappingStorage['KalturaGenericDistributionProviderActionBaseFilter'] = KalturaGenericDistributionProviderActionBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBY3Rpb25CYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQm5FLElBQUE7SUFBd0UsOEVBQWE7SUFhakYsNERBQVksSUFBOEQ7ZUFFdEUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5RUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvREFBb0QsRUFBRTtZQUN2RyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLGtDQUFrQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuRCwrQkFBK0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEQsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDcEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZEQXpETDtFQW1Cd0UsYUFBYSxFQXVDcEYsQ0FBQTtBQXZDRCw4REF1Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0RBQW9ELENBQUMsR0FBRyxrREFBa0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdGdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlcklkRXF1YWw/IDogbnVtYmVyO1xuXHRnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJJZEluPyA6IHN0cmluZztcblx0YWN0aW9uRXF1YWw/IDogS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbjtcblx0YWN0aW9uSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0Z2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVySWRFcXVhbCA6IG51bWJlcjtcblx0Z2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVySWRJbiA6IHN0cmluZztcblx0YWN0aW9uRXF1YWwgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uO1xuXHRhY3Rpb25JbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Z2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRnZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjdGlvbkVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb25JbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQWN0aW9uQmFzZUZpbHRlciddID0gS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFjdGlvbkJhc2VGaWx0ZXI7Il19