/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileFilter } from './KalturaDeliveryProfileFilter';
/**
 * @record
 */
export function KalturaDeliveryProfileRtmpBaseFilterArgs() { }
var KalturaDeliveryProfileRtmpBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileRtmpBaseFilter, _super);
    function KalturaDeliveryProfileRtmpBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileRtmpBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileRtmpBaseFilter' }
        });
        return result;
    };
    return KalturaDeliveryProfileRtmpBaseFilter;
}(KalturaDeliveryProfileFilter));
export { KalturaDeliveryProfileRtmpBaseFilter };
typesMappingStorage['KalturaDeliveryProfileRtmpBaseFilter'] = KalturaDeliveryProfileRtmpBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXBCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGVsaXZlcnlQcm9maWxlUnRtcEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFvQyxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQU9oSCxJQUFBO0lBQTBELGdFQUE0QjtJQUlsRiw4Q0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1NBQ2hGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBNUJMO0VBUzBELDRCQUE0QixFQW9CckYsQ0FBQTtBQXBCRCxnREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVGaWx0ZXIsIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGVsaXZlcnlQcm9maWxlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlUnRtcEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXBCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXBCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVSdG1wQmFzZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVJ0bXBCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlUnRtcEJhc2VGaWx0ZXI7Il19