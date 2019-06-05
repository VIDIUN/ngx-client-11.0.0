/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeedBaseFilter } from './KalturaBaseSyndicationFeedBaseFilter';
/**
 * @record
 */
export function KalturaBaseSyndicationFeedFilterArgs() { }
var KalturaBaseSyndicationFeedFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBaseSyndicationFeedFilter, _super);
    function KalturaBaseSyndicationFeedFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBaseSyndicationFeedFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBaseSyndicationFeedFilter' }
        });
        return result;
    };
    return KalturaBaseSyndicationFeedFilter;
}(KalturaBaseSyndicationFeedBaseFilter));
export { KalturaBaseSyndicationFeedFilter };
typesMappingStorage['KalturaBaseSyndicationFeedFilter'] = KalturaBaseSyndicationFeedFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBNEMsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7QUFPeEksSUFBQTtJQUFzRCw0REFBb0M7SUFJdEYsMENBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUM1RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQTVCTDtFQVNzRCxvQ0FBb0MsRUFvQnpGLENBQUE7QUFwQkQsNENBb0JDO0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEJhc2VGaWx0ZXIsIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlciBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkRmlsdGVyJ10gPSBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEZpbHRlcjsiXX0=