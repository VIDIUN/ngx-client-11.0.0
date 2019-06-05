/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRemoteDropFolderBaseFilter } from './KalturaRemoteDropFolderBaseFilter';
/**
 * @record
 */
export function KalturaRemoteDropFolderFilterArgs() { }
var KalturaRemoteDropFolderFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRemoteDropFolderFilter, _super);
    function KalturaRemoteDropFolderFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaRemoteDropFolderFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRemoteDropFolderFilter' }
        });
        return result;
    };
    return KalturaRemoteDropFolderFilter;
}(KalturaRemoteDropFolderBaseFilter));
export { KalturaRemoteDropFolderFilter };
typesMappingStorage['KalturaRemoteDropFolderFilter'] = KalturaRemoteDropFolderFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlbW90ZURyb3BGb2xkZXJGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFSZW1vdGVEcm9wRm9sZGVyRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7QUFPL0gsSUFBQTtJQUFtRCx5REFBaUM7SUFJaEYsdUNBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtTQUN6RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQTVCTDtFQVNtRCxpQ0FBaUMsRUFvQm5GLENBQUE7QUFwQkQseUNBb0JDO0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckJhc2VGaWx0ZXIsIEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZW1vdGVEcm9wRm9sZGVyQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlbW90ZURyb3BGb2xkZXJGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyQmFzZUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckZpbHRlciBleHRlbmRzIEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVJlbW90ZURyb3BGb2xkZXJGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVJlbW90ZURyb3BGb2xkZXJGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFSZW1vdGVEcm9wRm9sZGVyRmlsdGVyJ10gPSBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckZpbHRlcjsiXX0=