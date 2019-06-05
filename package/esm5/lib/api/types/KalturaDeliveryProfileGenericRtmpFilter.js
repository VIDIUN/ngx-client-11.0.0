/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileGenericRtmpBaseFilter } from './KalturaDeliveryProfileGenericRtmpBaseFilter';
/**
 * @record
 */
export function KalturaDeliveryProfileGenericRtmpFilterArgs() { }
var KalturaDeliveryProfileGenericRtmpFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileGenericRtmpFilter, _super);
    function KalturaDeliveryProfileGenericRtmpFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileGenericRtmpFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileGenericRtmpFilter' }
        });
        return result;
    };
    return KalturaDeliveryProfileGenericRtmpFilter;
}(KalturaDeliveryProfileGenericRtmpBaseFilter));
export { KalturaDeliveryProfileGenericRtmpFilter };
typesMappingStorage['KalturaDeliveryProfileGenericRtmpFilter'] = KalturaDeliveryProfileGenericRtmpFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1J0bXBGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJDQUEyQyxFQUFtRCxNQUFNLCtDQUErQyxDQUFDOzs7OztBQU83SixJQUFBO0lBQTZELG1FQUEyQztJQUlwRyxpREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1NBQ25GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBNUJMO0VBUzZELDJDQUEyQyxFQW9CdkcsQ0FBQTtBQXBCRCxtREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcEJhc2VGaWx0ZXIsIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcEJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1J0bXBCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1J0bXBGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcEJhc2VGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wRmlsdGVyIGV4dGVuZHMgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljUnRtcEZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNSdG1wRmlsdGVyJ10gPSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY1J0bXBGaWx0ZXI7Il19