/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDistributionProfileBaseFilter } from './KalturaGenericDistributionProfileBaseFilter';
/**
 * @record
 */
export function KalturaGenericDistributionProfileFilterArgs() { }
var KalturaGenericDistributionProfileFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericDistributionProfileFilter, _super);
    function KalturaGenericDistributionProfileFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGenericDistributionProfileFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericDistributionProfileFilter' }
        });
        return result;
    };
    return KalturaGenericDistributionProfileFilter;
}(KalturaGenericDistributionProfileBaseFilter));
export { KalturaGenericDistributionProfileFilter };
typesMappingStorage['KalturaGenericDistributionProfileFilter'] = KalturaGenericDistributionProfileFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJDQUEyQyxFQUFtRCxNQUFNLCtDQUErQyxDQUFDOzs7OztBQU83SixJQUFBO0lBQTZELG1FQUEyQztJQUlwRyxpREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1NBQ25GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBNUJMO0VBUzZELDJDQUEyQyxFQW9CdkcsQ0FBQTtBQXBCRCxtREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXIsIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUJhc2VGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlQmFzZUZpbHRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyJ10gPSBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXI7Il19