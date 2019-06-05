/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider } from './KalturaDistributionProvider';
/**
 * @record
 */
export function KalturaFreewheelDistributionProviderArgs() { }
var KalturaFreewheelDistributionProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFreewheelDistributionProvider, _super);
    function KalturaFreewheelDistributionProvider(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFreewheelDistributionProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFreewheelDistributionProvider' }
        });
        return result;
    };
    return KalturaFreewheelDistributionProvider;
}(KalturaDistributionProvider));
export { KalturaFreewheelDistributionProvider };
typesMappingStorage['KalturaFreewheelDistributionProvider'] = KalturaFreewheelDistributionProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFtQyxNQUFNLCtCQUErQixDQUFDOzs7OztBQU83RyxJQUFBO0lBQTBELGdFQUEyQjtJQUlqRiw4Q0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1NBQ2hGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBNUJMO0VBUzBELDJCQUEyQixFQW9CcEYsQ0FBQTtBQXBCRCxnREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlciwgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uUHJvdmlkZXIgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm92aWRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uUHJvdmlkZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm92aWRlciddID0gS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb3ZpZGVyOyJdfQ==