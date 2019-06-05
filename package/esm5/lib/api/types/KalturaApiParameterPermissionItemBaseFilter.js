/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItemFilter } from './KalturaPermissionItemFilter';
/**
 * @record
 */
export function KalturaApiParameterPermissionItemBaseFilterArgs() { }
var KalturaApiParameterPermissionItemBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaApiParameterPermissionItemBaseFilter, _super);
    function KalturaApiParameterPermissionItemBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaApiParameterPermissionItemBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaApiParameterPermissionItemBaseFilter' }
        });
        return result;
    };
    return KalturaApiParameterPermissionItemBaseFilter;
}(KalturaPermissionItemFilter));
export { KalturaApiParameterPermissionItemBaseFilter };
typesMappingStorage['KalturaApiParameterPermissionItemBaseFilter'] = KalturaApiParameterPermissionItemBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFwaVBhcmFtZXRlclBlcm1pc3Npb25JdGVtQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBTzdHLElBQUE7SUFBaUUsdUVBQTJCO0lBSXhGLHFEQUFZLElBQXVEO2VBRS9ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkNBQTZDLEVBQUU7U0FDdkYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzREE1Qkw7RUFTaUUsMkJBQTJCLEVBb0IzRixDQUFBO0FBcEJELHVEQW9CQztBQUVELG1CQUFtQixDQUFDLDZDQUE2QyxDQUFDLEdBQUcsMkNBQTJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBlcm1pc3Npb25JdGVtRmlsdGVyLCBLYWx0dXJhUGVybWlzc2lvbkl0ZW1GaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUGVybWlzc2lvbkl0ZW1GaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFQZXJtaXNzaW9uSXRlbUZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1CYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVBlcm1pc3Npb25JdGVtRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXBpUGFyYW1ldGVyUGVybWlzc2lvbkl0ZW1CYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUJhc2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUJhc2VGaWx0ZXInXSA9IEthbHR1cmFBcGlQYXJhbWV0ZXJQZXJtaXNzaW9uSXRlbUJhc2VGaWx0ZXI7Il19