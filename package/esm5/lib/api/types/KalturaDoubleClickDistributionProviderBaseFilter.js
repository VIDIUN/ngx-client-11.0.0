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
export function KalturaDoubleClickDistributionProviderBaseFilterArgs() { }
var KalturaDoubleClickDistributionProviderBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDoubleClickDistributionProviderBaseFilter, _super);
    function KalturaDoubleClickDistributionProviderBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDoubleClickDistributionProviderBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDoubleClickDistributionProviderBaseFilter' }
        });
        return result;
    };
    return KalturaDoubleClickDistributionProviderBaseFilter;
}(KalturaDistributionProviderFilter));
export { KalturaDoubleClickDistributionProviderBaseFilter };
typesMappingStorage['KalturaDoubleClickDistributionProviderBaseFilter'] = KalturaDoubleClickDistributionProviderBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlDQUFpQyxFQUF5QyxNQUFNLHFDQUFxQyxDQUFDOzs7OztBQU8vSCxJQUFBO0lBQXNFLDRFQUFpQztJQUluRywwREFBWSxJQUE0RDtlQUVwRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtEQUFrRCxFQUFFO1NBQzVGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkRBNUJMO0VBU3NFLGlDQUFpQyxFQW9CdEcsQ0FBQTtBQXBCRCw0REFvQkM7QUFFRCxtQkFBbUIsQ0FBQyxrREFBa0QsQ0FBQyxHQUFHLGdEQUFnRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlciwgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm92aWRlckJhc2VGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEb3VibGVDbGlja0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlciddID0gS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyOyJdfQ==