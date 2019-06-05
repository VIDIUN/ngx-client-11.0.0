/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaWebexDropFolderFileBaseFilter } from './KalturaWebexDropFolderFileBaseFilter';
/**
 * @record
 */
export function KalturaWebexDropFolderFileFilterArgs() { }
var KalturaWebexDropFolderFileFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWebexDropFolderFileFilter, _super);
    function KalturaWebexDropFolderFileFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWebexDropFolderFileFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWebexDropFolderFileFilter' }
        });
        return result;
    };
    return KalturaWebexDropFolderFileFilter;
}(KalturaWebexDropFolderFileBaseFilter));
export { KalturaWebexDropFolderFileFilter };
typesMappingStorage['KalturaWebexDropFolderFileFilter'] = KalturaWebexDropFolderFileFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGVGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBNEMsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7QUFPeEksSUFBQTtJQUFzRCw0REFBb0M7SUFJdEYsMENBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUM1RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQTVCTDtFQVNzRCxvQ0FBb0MsRUFvQnpGLENBQUE7QUFwQkQsNENBb0JDO0FBRUQsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsR0FBRyxnQ0FBZ0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyRmlsZUJhc2VGaWx0ZXIsIEthbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGVGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyRmlsZUZpbHRlciBleHRlbmRzIEthbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGVGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdlYmV4RHJvcEZvbGRlckZpbGVGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXZWJleERyb3BGb2xkZXJGaWxlRmlsdGVyJ10gPSBLYWx0dXJhV2ViZXhEcm9wRm9sZGVyRmlsZUZpbHRlcjsiXX0=