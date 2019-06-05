/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetParamsFilter } from './KalturaAssetParamsFilter';
/**
 * @record
 */
export function KalturaAssetParamsOutputBaseFilterArgs() { }
var KalturaAssetParamsOutputBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetParamsOutputBaseFilter, _super);
    function KalturaAssetParamsOutputBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAssetParamsOutputBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetParamsOutputBaseFilter' }
        });
        return result;
    };
    return KalturaAssetParamsOutputBaseFilter;
}(KalturaAssetParamsFilter));
export { KalturaAssetParamsOutputBaseFilter };
typesMappingStorage['KalturaAssetParamsOutputBaseFilter'] = KalturaAssetParamsOutputBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQWdDLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBT3BHLElBQUE7SUFBd0QsOERBQXdCO0lBSTVFLDRDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7U0FDOUUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0E1Qkw7RUFTd0Qsd0JBQXdCLEVBb0IvRSxDQUFBO0FBcEJELDhDQW9CQztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyLCBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBc3NldFBhcmFtc091dHB1dEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtc0ZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBc3NldFBhcmFtc091dHB1dEJhc2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBc3NldFBhcmFtc091dHB1dEJhc2VGaWx0ZXInXSA9IEthbHR1cmFBc3NldFBhcmFtc091dHB1dEJhc2VGaWx0ZXI7Il19