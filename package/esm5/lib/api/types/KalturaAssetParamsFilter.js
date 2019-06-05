/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetParamsBaseFilter } from './KalturaAssetParamsBaseFilter';
/**
 * @record
 */
export function KalturaAssetParamsFilterArgs() { }
var KalturaAssetParamsFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetParamsFilter, _super);
    function KalturaAssetParamsFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAssetParamsFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetParamsFilter' }
        });
        return result;
    };
    return KalturaAssetParamsFilter;
}(KalturaAssetParamsBaseFilter));
export { KalturaAssetParamsFilter };
typesMappingStorage['KalturaAssetParamsFilter'] = KalturaAssetParamsFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFvQyxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQU9oSCxJQUFBO0lBQThDLG9EQUE0QjtJQUl0RSxrQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1NBQ3BFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBNUJMO0VBUzhDLDRCQUE0QixFQW9CekUsQ0FBQTtBQXBCRCxvQ0FvQkM7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtc0Jhc2VGaWx0ZXIsIEthbHR1cmFBc3NldFBhcmFtc0Jhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRQYXJhbXNCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtc0Jhc2VGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBc3NldFBhcmFtc0ZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyJ10gPSBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXI7Il19