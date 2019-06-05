/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResourceBaseFilter } from './KalturaScheduleResourceBaseFilter';
/**
 * @record
 */
export function KalturaScheduleResourceFilterArgs() { }
var KalturaScheduleResourceFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduleResourceFilter, _super);
    function KalturaScheduleResourceFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScheduleResourceFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduleResourceFilter' }
        });
        return result;
    };
    return KalturaScheduleResourceFilter;
}(KalturaScheduleResourceBaseFilter));
export { KalturaScheduleResourceFilter };
typesMappingStorage['KalturaScheduleResourceFilter'] = KalturaScheduleResourceFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTY2hlZHVsZVJlc291cmNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7QUFPL0gsSUFBQTtJQUFtRCx5REFBaUM7SUFJaEYsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUN6RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQTVCTDtFQVNtRCxpQ0FBaUMsRUFvQm5GLENBQUE7QUFwQkQseUNBb0JDO0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXIsIEthbHR1cmFTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUZpbHRlciBleHRlbmRzIEthbHR1cmFTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTY2hlZHVsZVJlc291cmNlRmlsdGVyJ10gPSBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUZpbHRlcjsiXX0=