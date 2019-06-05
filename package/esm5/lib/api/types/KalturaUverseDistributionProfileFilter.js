/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUverseDistributionProfileBaseFilter } from './KalturaUverseDistributionProfileBaseFilter';
/**
 * @record
 */
export function KalturaUverseDistributionProfileFilterArgs() { }
var KalturaUverseDistributionProfileFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUverseDistributionProfileFilter, _super);
    function KalturaUverseDistributionProfileFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUverseDistributionProfileFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUverseDistributionProfileFilter' }
        });
        return result;
    };
    return KalturaUverseDistributionProfileFilter;
}(KalturaUverseDistributionProfileBaseFilter));
export { KalturaUverseDistributionProfileFilter };
typesMappingStorage['KalturaUverseDistributionProfileFilter'] = KalturaUverseDistributionProfileFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQ0FBMEMsRUFBa0QsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7QUFPMUosSUFBQTtJQUE0RCxrRUFBMEM7SUFJbEcsZ0RBQVksSUFBa0Q7ZUFFMUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtTQUNsRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lEQTVCTDtFQVM0RCwwQ0FBMEMsRUFvQnJHLENBQUE7QUFwQkQsa0RBb0JDO0FBRUQsbUJBQW1CLENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXIsIEthbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlciBleHRlbmRzIEthbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyJ10gPSBLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlcjsiXX0=