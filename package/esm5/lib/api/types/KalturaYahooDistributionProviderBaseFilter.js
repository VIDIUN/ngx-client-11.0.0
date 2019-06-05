/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderFilter } from './KalturaDistributionProviderFilter';
/**
 * @record
 */
export function KalturaYahooDistributionProviderBaseFilterArgs() { }
var KalturaYahooDistributionProviderBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaYahooDistributionProviderBaseFilter, _super);
    function KalturaYahooDistributionProviderBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaYahooDistributionProviderBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaYahooDistributionProviderBaseFilter' }
        });
        return result;
    };
    return KalturaYahooDistributionProviderBaseFilter;
}(KalturaDistributionProviderFilter));
export { KalturaYahooDistributionProviderBaseFilter };
typesMappingStorage['KalturaYahooDistributionProviderBaseFilter'] = KalturaYahooDistributionProviderBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlDQUFpQyxFQUF5QyxNQUFNLHFDQUFxQyxDQUFDOzs7OztBQU8vSCxJQUFBO0lBQWdFLHNFQUFpQztJQUk3RixvREFBWSxJQUFzRDtlQUU5RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBNUJMO0VBU2dFLGlDQUFpQyxFQW9CaEcsQ0FBQTtBQXBCRCxzREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyw0Q0FBNEMsQ0FBQyxHQUFHLDBDQUEwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlciwgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhWWFob29EaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFZYWhvb0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlciddID0gS2FsdHVyYVlhaG9vRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyOyJdfQ==