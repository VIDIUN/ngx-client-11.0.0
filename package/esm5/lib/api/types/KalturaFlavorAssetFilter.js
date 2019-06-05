/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAssetBaseFilter } from './KalturaFlavorAssetBaseFilter';
/**
 * @record
 */
export function KalturaFlavorAssetFilterArgs() { }
var KalturaFlavorAssetFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFlavorAssetFilter, _super);
    function KalturaFlavorAssetFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFlavorAssetFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFlavorAssetFilter' }
        });
        return result;
    };
    return KalturaFlavorAssetFilter;
}(KalturaFlavorAssetBaseFilter));
export { KalturaFlavorAssetFilter };
typesMappingStorage['KalturaFlavorAssetFilter'] = KalturaFlavorAssetFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvckFzc2V0RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRmxhdm9yQXNzZXRGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFvQyxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQU9oSCxJQUFBO0lBQThDLG9EQUE0QjtJQUl0RSxrQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1NBQ3BFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBNUJMO0VBUzhDLDRCQUE0QixFQW9CekUsQ0FBQTtBQXBCRCxvQ0FvQkM7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JBc3NldEJhc2VGaWx0ZXIsIEthbHR1cmFGbGF2b3JBc3NldEJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yQXNzZXRCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmxhdm9yQXNzZXRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JBc3NldEJhc2VGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZsYXZvckFzc2V0RmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZsYXZvckFzc2V0QmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZsYXZvckFzc2V0RmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGbGF2b3JBc3NldEZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZsYXZvckFzc2V0RmlsdGVyJ10gPSBLYWx0dXJhRmxhdm9yQXNzZXRGaWx0ZXI7Il19