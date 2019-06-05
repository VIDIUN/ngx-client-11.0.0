/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericSyndicationFeedBaseFilter } from './KalturaGenericSyndicationFeedBaseFilter';
/**
 * @record
 */
export function KalturaGenericSyndicationFeedFilterArgs() { }
var KalturaGenericSyndicationFeedFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericSyndicationFeedFilter, _super);
    function KalturaGenericSyndicationFeedFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericSyndicationFeedFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericSyndicationFeedFilter' }
        });
        return result;
    };
    return KalturaGenericSyndicationFeedFilter;
}(KalturaGenericSyndicationFeedBaseFilter));
export { KalturaGenericSyndicationFeedFilter };
typesMappingStorage['KalturaGenericSyndicationFeedFilter'] = KalturaGenericSyndicationFeedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1Q0FBdUMsRUFBK0MsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7QUFPakosSUFBQTtJQUF5RCwrREFBdUM7SUFJNUYsNkNBQVksSUFBK0M7ZUFFdkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtTQUMvRSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhDQTVCTDtFQVN5RCx1Q0FBdUMsRUFvQi9GLENBQUE7QUFwQkQsK0NBb0JDO0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXIsIEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEZpbHRlciBleHRlbmRzIEthbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWRGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdlbmVyaWNTeW5kaWNhdGlvbkZlZWRGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFHZW5lcmljU3luZGljYXRpb25GZWVkRmlsdGVyJ10gPSBLYWx0dXJhR2VuZXJpY1N5bmRpY2F0aW9uRmVlZEZpbHRlcjsiXX0=