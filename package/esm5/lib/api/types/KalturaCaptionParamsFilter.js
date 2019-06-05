/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionParamsBaseFilter } from './KalturaCaptionParamsBaseFilter';
/**
 * @record
 */
export function KalturaCaptionParamsFilterArgs() { }
var KalturaCaptionParamsFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCaptionParamsFilter, _super);
    function KalturaCaptionParamsFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCaptionParamsFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCaptionParamsFilter' }
        });
        return result;
    };
    return KalturaCaptionParamsFilter;
}(KalturaCaptionParamsBaseFilter));
export { KalturaCaptionParamsFilter };
typesMappingStorage['KalturaCaptionParamsFilter'] = KalturaCaptionParamsFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25QYXJhbXNGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0aW9uUGFyYW1zRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBc0MsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFPdEgsSUFBQTtJQUFnRCxzREFBOEI7SUFJMUUsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUN0RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQTVCTDtFQVNnRCw4QkFBOEIsRUFvQjdFLENBQUE7QUFwQkQsc0NBb0JDO0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvblBhcmFtc0Jhc2VGaWx0ZXIsIEthbHR1cmFDYXB0aW9uUGFyYW1zQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uUGFyYW1zQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhcHRpb25QYXJhbXNGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDYXB0aW9uUGFyYW1zQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2FwdGlvblBhcmFtc0ZpbHRlciBleHRlbmRzIEthbHR1cmFDYXB0aW9uUGFyYW1zQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhcHRpb25QYXJhbXNGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhcHRpb25QYXJhbXNGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXB0aW9uUGFyYW1zRmlsdGVyJ10gPSBLYWx0dXJhQ2FwdGlvblBhcmFtc0ZpbHRlcjsiXX0=