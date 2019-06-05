/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryDistributionBaseFilter } from './KalturaEntryDistributionBaseFilter';
/**
 * @record
 */
export function KalturaEntryDistributionFilterArgs() { }
var KalturaEntryDistributionFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryDistributionFilter, _super);
    function KalturaEntryDistributionFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryDistributionFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryDistributionFilter' }
        });
        return result;
    };
    return KalturaEntryDistributionFilter;
}(KalturaEntryDistributionBaseFilter));
export { KalturaEntryDistributionFilter };
typesMappingStorage['KalturaEntryDistributionFilter'] = KalturaEntryDistributionFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW50cnlEaXN0cmlidXRpb25GaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUEwQyxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQU9sSSxJQUFBO0lBQW9ELDBEQUFrQztJQUlsRix3Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1NBQzFFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBNUJMO0VBU29ELGtDQUFrQyxFQW9CckYsQ0FBQTtBQXBCRCwwQ0FvQkM7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkJhc2VGaWx0ZXIsIEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlEaXN0cmlidXRpb25CYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkJhc2VGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmlsdGVyJ10gPSBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GaWx0ZXI7Il19