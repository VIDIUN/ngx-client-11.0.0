/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFacebookDistributionProviderBaseFilter } from './KalturaFacebookDistributionProviderBaseFilter';
/**
 * @record
 */
export function KalturaFacebookDistributionProviderFilterArgs() { }
var KalturaFacebookDistributionProviderFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFacebookDistributionProviderFilter, _super);
    function KalturaFacebookDistributionProviderFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFacebookDistributionProviderFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFacebookDistributionProviderFilter' }
        });
        return result;
    };
    return KalturaFacebookDistributionProviderFilter;
}(KalturaFacebookDistributionProviderBaseFilter));
export { KalturaFacebookDistributionProviderFilter };
typesMappingStorage['KalturaFacebookDistributionProviderFilter'] = KalturaFacebookDistributionProviderFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2Q0FBNkMsRUFBcUQsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7QUFPbkssSUFBQTtJQUErRCxxRUFBNkM7SUFJeEcsbURBQVksSUFBcUQ7ZUFFN0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtTQUNyRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29EQTVCTDtFQVMrRCw2Q0FBNkMsRUFvQjNHLENBQUE7QUFwQkQscURBb0JDO0FBRUQsbUJBQW1CLENBQUMsMkNBQTJDLENBQUMsR0FBRyx5Q0FBeUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmFjZWJvb2tEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXIsIEthbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmFjZWJvb2tEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlciBleHRlbmRzIEthbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZhY2Vib29rRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGYWNlYm9va0Rpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyJ10gPSBLYWx0dXJhRmFjZWJvb2tEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlcjsiXX0=