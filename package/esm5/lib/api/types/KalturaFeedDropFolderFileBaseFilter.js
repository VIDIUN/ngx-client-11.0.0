/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileFilter } from './KalturaDropFolderFileFilter';
/**
 * @record
 */
export function KalturaFeedDropFolderFileBaseFilterArgs() { }
var KalturaFeedDropFolderFileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFeedDropFolderFileBaseFilter, _super);
    function KalturaFeedDropFolderFileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFeedDropFolderFileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFeedDropFolderFileBaseFilter' }
        });
        return result;
    };
    return KalturaFeedDropFolderFileBaseFilter;
}(KalturaDropFolderFileFilter));
export { KalturaFeedDropFolderFileBaseFilter };
typesMappingStorage['KalturaFeedDropFolderFileBaseFilter'] = KalturaFeedDropFolderFileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGZWVkRHJvcEZvbGRlckZpbGVCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFPN0csSUFBQTtJQUF5RCwrREFBMkI7SUFJaEYsNkNBQVksSUFBK0M7ZUFFdkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtTQUMvRSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhDQTVCTDtFQVN5RCwyQkFBMkIsRUFvQm5GLENBQUE7QUFwQkQsK0NBb0JDO0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVGaWx0ZXIsIEthbHR1cmFEcm9wRm9sZGVyRmlsZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyRmlsZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmVlZERyb3BGb2xkZXJGaWxlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyRmlsZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZUJhc2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGZWVkRHJvcEZvbGRlckZpbGVCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRmVlZERyb3BGb2xkZXJGaWxlQmFzZUZpbHRlcjsiXX0=